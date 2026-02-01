export const User_API_BASE_URL = "https://api-users.astrosway.com";

// ---------------- Storage utility functions ----------------
export const Storage = {
  setItem: (key, value) => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(key, value);
    }
  },

  getItem: (key) => {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem(key);
    }
    return null;
  },

  removeItem: (key) => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem(key);
    }
  },
};

// ---------------- User ID management ----------------
export const setUserId = (userId) => {
  Storage.setItem("userId", userId);
};

export const getUserId = () => {
  return Storage.getItem("userId");
};

export const removeUserId = () => {
  Storage.removeItem("userId");
};

// ---------------- Token management ----------------
export const setUserToken = (token) => {
  Storage.setItem("userToken", token);
};

export const getUserToken = () => {
  return Storage.getItem("userToken");
};

/* ---------------- Same-tab auth event ---------------- */
export const USER_AUTH_EVENT = "user-auth-changed";
export const emitUserAuthChange = () => {
  if (typeof window !== "undefined")
    window.dispatchEvent(new Event(USER_AUTH_EVENT));
};

/* ---------------- Profile helpers ---------------- */
export const setUserProfile = (profile) => {
  try {
    Storage.setItem("userProfile", JSON.stringify(profile));
  } catch {}
};

export const getUserProfile = () => {
  try {
    const raw = Storage.getItem("userProfile");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

/* ---------------- Clear auth ---------------- */
export const clearUserAuthData = () => {
  removeUserId();
  Storage.removeItem("userToken");
  Storage.removeItem("userProfile");
  Storage.removeItem("userOnboardingComplete");
  Storage.removeItem("userDetails");
  emitUserAuthChange();
};

// ---------------- API functions (Updated for Email) ----------------
export const userSignIn = async (email) => {
  try {
    const response = await fetch(`${User_API_BASE_URL}/Onboarding/signInByEmail`, {
      method: "POST",
      headers: {
        Authorization: "INTERNAL_AUTH",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
      }),
    });
    return await response.json();
  } catch (error) {
    throw new Error("Network error. Please try again.");
  }
};

export const verifyUserOTP = async (userId, code) => {
  try {
    const response = await fetch(`${User_API_BASE_URL}/Onboarding/otpVerify`, {
      method: "POST",
      headers: {
        Authorization: "INTERNAL_AUTH",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        code,
      }),
    });
    return await response.json();
  } catch (error) {
    throw new Error("Network error. Please try again.");
  }
};

export const resendUserOTP = async (userId) => {
  try {
    const response = await fetch(`${User_API_BASE_URL}/Onboarding/resendOtp`, {
      method: "POST",
      headers: {
        Authorization: "INTERNAL_AUTH",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
      }),
    });
    return await response.json();
  } catch (error) {
    throw new Error("Network error. Please try again.");
  }
};

// Store user details
export const setUserDetails = (userDetails) => {
  Storage.setItem("userDetails", JSON.stringify(userDetails));
};

export const getUserDetails = () => {
  const details = Storage.getItem("userDetails");
  return details ? JSON.parse(details) : null;
};

// Check if user has completed profile
export const hasUserCompletedProfile = () => {
  const details = getUserDetails();
  return details && details.fullName && details.dateOfBirth;
};

// Clear user details
export const clearUserDetails = () => {
  Storage.removeItem("userDetails");
};

/** Uses RAW token in Authorization header, returns first item */
export const fetchUserProfileFromAPI = async () => {
  const token = getUserToken();
  if (!token) return null;
  try {
    const res = await fetch(`${User_API_BASE_URL}/Onboarding/info`, {
      method: "GET",
      headers: { Authorization: token },
    });
    const json = await res.json();
    if (json?.statusCode === 200 && Array.isArray(json.data) && json.data[0]) {
      return json.data[0];
    }
  } catch (_) {}
  return null;
};

/* ---------------- Info form ---------------- */
export const addUserDetails = async (formData) => {
  const token = getUserToken();
  if (!token) throw new Error("No authentication token found");
  const res = await fetch(`${User_API_BASE_URL}/user/infoForm`, {
    method: "POST",
    headers: { Authorization: token, "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  const json = await res.json();
  return json;
};

/* ---------------- Completion check ---------------- */
export const isUserProfileComplete = (detail) => {
  if (!detail || typeof detail !== "object") return false;
  return Boolean(detail.fullName && detail.dateOfBirth);
};

/* ---------------- Save session ---------------- */
export const saveUserSession = ({ userId, token, userDetails }) => {
  if (userId) setUserId(userId);
  if (token) setUserToken(token);

  if (userDetails) {
    const profile = {
      fullName: userDetails.fullName || userDetails.name || "",
      dateOfBirth: userDetails.dateOfBirth || userDetails.dob || "",
      timeOfBirth: userDetails.timeOfBirth || userDetails.tob || "",
      placeOfBirth: userDetails.placeOfBirth || userDetails.pob || "",
      profilePic: userDetails.profilePic || "",
      ...userDetails,
    };
    setUserProfile(profile);
  }

  const complete = isUserProfileComplete(userDetails);
  if (complete) {
    Storage.setItem("userOnboardingComplete", "true");
  } else {
    Storage.removeItem("userOnboardingComplete");
  }

  emitUserAuthChange();
  return complete;
};

export async function getFreeAstrologers({
  limit = 10,
  page = 1,
  serviceType,
} = {}) {
  const qs = new URLSearchParams({ limit: String(limit), page: String(page) });
  if (serviceType) qs.set("serviceType", serviceType);
  const res = await fetch(
    `${User_API_BASE_URL}/user/freeAstroList?${qs.toString()}`,
    {
      headers: { Authorization: "INTERNAL_AUTH" },
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("freeAstroList failed");
  return res.json();
}

export async function getOfferAstrologers({ limit = 10, page = 1 } = {}) {
  const qs = new URLSearchParams({ limit: String(limit), page: String(page) });
  const res = await fetch(
    `${User_API_BASE_URL}/user/offerAstroList?${qs.toString()}`,
    {
      headers: { Authorization: "INTERNAL_AUTH" },
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("offerAstroList failed");
  return res.json();
}

export async function getPopularAstrologers({ limit = 10, page = 1 } = {}) {
  const qs = new URLSearchParams({ limit: String(limit), page: String(page) });
  const res = await fetch(
    `${User_API_BASE_URL}/user/popularAstro?${qs.toString()}`,
    {
      headers: { Authorization: "INTERNAL_AUTH" },
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("popularAstro failed");
  return res.json();
}

export function pickAstroDetails(json) {
  return Array.isArray(json?.data?.details) ? json.data.details : [];
}