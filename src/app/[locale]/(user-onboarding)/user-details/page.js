"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  addUserDetails,
  getUserToken,
  clearUserAuthData,
  getUserDetails,
  isUserProfileComplete, // ✅ use new completion helper
  saveUserSession, // ✅ sets cache + onboarding flag + emits event
  fetchUserProfileFromAPI, // ✅ refetch server copy after submit
} from "@/utils/userUtils";

export default function UserProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [date, setDate] = useState();
  const [time, setTime] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    placeOfBirth: "",
    gender: "",
    dateOfBirth: "",
    timeOfBirth: "",
  });

  // Require token; if profile already complete, redirect to /profile
  useEffect(() => {
    const token = getUserToken();
    if (!token) {
      router.replace("/register");
      return;
    }

    const local = getUserDetails();
    const complete =
      isUserProfileComplete(local) ||
      localStorage.getItem("userOnboardingComplete") === "true";

    if (complete) {
      router.replace("/profile");
    }
  }, [router]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    if (selectedDate) {
      // API expects dd/MM/yyyy (based on your examples)
      const formatted = format(selectedDate, "dd/MM/yyyy");
      handleInputChange("dateOfBirth", formatted);
    }
  };

  const handleTimeChange = (e) => {
    const value = e.target.value; // "HH:mm"
    setTime(value);
    handleInputChange("timeOfBirth", value);
  };

  const hasEmptyField = () =>
    Object.values(formData).some((v) => v === "" || v == null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (hasEmptyField()) {
      setError("Please fill all the fields");
      return;
    }
    if (date && date > new Date()) {
      setError("Date of Birth cannot be in the future.");
      return;
    }

    setIsLoading(true);
    try {
      const result = await addUserDetails(formData);

      if (result?.statusCode === 200) {
        // Fetch fresh profile from API; fall back to the form data if needed
        const apiProfile = (await fetchUserProfileFromAPI()) || formData;

        // Persist session + mark onboarding complete + notify header
        saveUserSession({
          token: getUserToken(),
          userDetails: apiProfile,
        });

        setSuccess("Profile updated successfully! Redirecting...");
        router.replace("/profile");
      } else {
        setError(result?.message || "Something went wrong");
      }
    } catch (err) {
      setError(err.message || "Network error. Please try again.");

      // If token is invalid, clear auth and send to login
      if (String(err.message).toLowerCase().includes("token")) {
        clearUserAuthData();
        router.replace("/register");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl overflow-hidden border-0">
        <CardHeader className="text-black dark:text-white px-6 pt-6 pb-2">
          <CardTitle className="text-2xl font-bold text-center">
            Complete Your Profile
          </CardTitle>
          <CardDescription className="text-muted-foreground text-center">
            Information you provide will assist astrologers in giving you
            accurate consultations
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <div className="space-y-4">
            {error && (
              <Alert variant="destructive" className="py-3">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="py-3 bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
                <AlertDescription className="text-green-800 dark:text-green-300">
                  {success}
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => handleInputChange("gender", value)}
                  required
                  className="w-full"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="Prefer-Not-To-Say">
                      Prefer Not to Say
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                      type="button"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick your date of birth"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateSelect}
                      initialFocus
                      captionLayout="dropdown-buttons"
                      fromYear={1950}
                      toYear={new Date().getFullYear()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeOfBirth">Time of Birth</Label>
                <Input
                  id="timeOfBirth"
                  type="time"
                  value={time}
                  onChange={handleTimeChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="placeOfBirth">Place of Birth</Label>
                <Input
                  id="placeOfBirth"
                  placeholder="Enter your place of birth"
                  value={formData.placeOfBirth}
                  onChange={(e) =>
                    handleInputChange("placeOfBirth", e.target.value)
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full py-6 text-base font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Complete Profile"
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground">
              Your information is secure and will only be used for astrological
              consultations.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
