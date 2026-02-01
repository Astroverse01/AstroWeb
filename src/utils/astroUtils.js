export const Astro_API_BASE_URL = "https://api-astro.astrosway.com";

/* ---------------- Storage ---------------- */

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

/* ---------------- Astro ID ---------------- */

export const setAstroId = (astroId) => {
  Storage.setItem("astroId", astroId);
};

export const getAstroId = () => {
  return Storage.getItem("astroId");
};

export const removeAstroId = () => {
  Storage.removeItem("astroId");
};

/* ---------------- Token ---------------- */

export const setAstroToken = (token) => {
  Storage.setItem("astroToken", token);
};

export const getAstroToken = () => {
  return Storage.getItem("astroToken");
};

/* ---------------- Same-tab auth event ---------------- */

export const AUTH_EVENT = "astro-auth-changed";
export const emitAuthChange = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(AUTH_EVENT));
  }
};

/* ---------------- Profile helpers ---------------- */

export const setAstroProfile = (profile) => {
  try {
    Storage.setItem("astroProfile", JSON.stringify(profile));
  } catch {}
};

export const getAstroProfile = () => {
  try {
    const raw = Storage.getItem("astroProfile");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

/* ---------------- Clear auth ---------------- */

export const clearAstroAuthData = () => {
  removeAstroId();
  Storage.removeItem("astroToken");
  Storage.removeItem("astroProfile");
  Storage.removeItem("astroOnboardingComplete");
  emitAuthChange();
};

/* ---------------- Auth APIs (Updated for Email) ---------------- */

// Sign in with email instead of phone
export const astroSignIn = async (email) => {
  try {
    const response = await fetch(`${Astro_API_BASE_URL}/onboard/signInByEmail`, {
      method: "POST",
      headers: {
        "Authorization": "INTERNAL_AUTH",
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

export const verifyAstroOTP = async (astroId, code) => {
  try {
    const response = await fetch(`${Astro_API_BASE_URL}/onboard/otpVerify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        astroId,
        code,
      }),
    });
    return await response.json();
  } catch (error) {
    throw new Error("Network error. Please try again.");
  }
};

export const resendAstroOTP = async (astroId) => {
  try {
    const response = await fetch(`${Astro_API_BASE_URL}/onboard/resendOtp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        astroId,
      }),
    });
    return await response.json();
  } catch (error) {
    throw new Error("Network error. Please try again.");
  }
};

/* ---------------- Upload functions ---------------- */

export const uploadProfilePic = async (file) => {
  try {
    const token = getAstroToken();
    
    if (!token) {
      throw new Error("No authentication token found");
    }

    const formData = new FormData();
    formData.append("files", file);

    const response = await fetch(`${Astro_API_BASE_URL}/astro/uploadPic`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    throw new Error("Network error. Please try again.");
  }
};

export const uploadAadhar = async (file) => {
  try {
    const token = getAstroToken();

    if (!token) {
      throw new Error("No authentication token found");
    }

    const formData = new FormData();
    formData.append("files", file);

    const response = await fetch(`${Astro_API_BASE_URL}/astro/uploadAadhar`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    throw new Error("Network error. Please try again.");
  }
};

export const uploadPancard = async (file) => {
  try {
    const token = getAstroToken();

    if (!token) {
      throw new Error("No authentication token found");
    }

    const formData = new FormData();
    formData.append("files", file);

    const response = await fetch(`${Astro_API_BASE_URL}/astro/uploadPancard`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    throw new Error("Network error. Please try again.");
  }
};

export const submitAstroData = async (userData) => {
  try {
    const token = getAstroToken();
    
    if (!token) {
      throw new Error("No authentication token found");
    }

    const formattedDob = userData.dob ? userData.dob : "";

    const finalData = {
      name: userData.name,
      description: "Auto-generated description",
      profilePic: userData.profilePic || "",
      startFrom: "2023",
      expertise: Array.isArray(userData.expertise) ? userData.expertise : [],
      language: Array.isArray(userData.language) ? userData.language : [],
      gender: userData.gender || "",
      dob: formattedDob,
      aadhar: userData.aadhar || "",
      pancard: userData.pancard || "",
      category: Array.isArray(userData.category) ? userData.category : [],
    };

    const response = await fetch(`${Astro_API_BASE_URL}/astro/skill`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(finalData),
    });
    return await response.json();
  } catch (error) {
    throw new Error("Network error. Please try again.");
  }
};

// ---------------- Completion check ----------------
export const isAstroOnboarded = (detail) => {
  if (!detail || typeof detail !== "object") return false;
  const hasKyc = Boolean(detail.aadhar && detail.pancard);
  const hasBasics = Boolean(detail.name && detail.gender && detail.dob);
  const hasProfile = Boolean(detail.profilePic);
  const hasSkills = Array.isArray(detail.expertise) && detail.expertise.length > 0;
  const hasLang = Array.isArray(detail.language) && detail.language.length > 0;
  const hasCategory = Array.isArray(detail.category) && detail.category.length > 0;
  return hasKyc && hasBasics && hasProfile && hasSkills && hasLang && hasCategory;
};

// ---------------- Save session ----------------
export const saveAstroSession = ({ astroId, token, astroDetail }) => {
  if (astroId) setAstroId(astroId);
  if (token) setAstroToken(token);

  if (astroDetail) {
    setAstroProfile(astroDetail);
  }

  const complete = isAstroOnboarded(astroDetail);
  if (complete) {
    Storage.setItem("astroOnboardingComplete", "true");
  } else {
    Storage.removeItem("astroOnboardingComplete");
  }

  emitAuthChange();
  return complete;
};

/** Uses raw token in Authorization header */
export const fetchAstroOnboardingInfo = async () => {
  const token = getAstroToken();
  if (!token) return null;

  try {
    const res = await fetch(`${Astro_API_BASE_URL}/astro/info`, {
      method: "GET",
      headers: { Authorization: token },
    });
    const json = await res.json();
    if (json?.statusCode === 200 && json?.data) return json.data;
  } catch {}
  return null;
};