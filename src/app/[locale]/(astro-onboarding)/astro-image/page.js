"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload, User } from "lucide-react";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import { uploadProfilePic } from "@/utils/astroUtils";

export default function ProfilePicture() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [profilePic, setProfilePic] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [storedData, setStoredData] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("astroOnboarding");
    if (data) {
      setStoredData(JSON.parse(data));
    }
  }, []);

  // added: revoke object URL when it changes/unmounts (prevents leaks)
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!profilePic) return;

    setUploading(true);
    try {
      const response = await uploadProfilePic(profilePic);
      if (response.statusCode === 200) {
        setStoredData((prev) => ({
          ...prev,
          profilePic: response.data,
        }));
        alert("Profile picture uploaded successfully!");
      } else {
        alert(response.message || "Upload failed");
      }
    } catch (error) {
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    localStorage.setItem("astroOnboarding", JSON.stringify(storedData));

    setTimeout(() => {
      router.push("/astro-document");
    }, 500);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <OnboardingLayout
      title="Profile Picture"
      description="Upload a professional photo to help clients recognize you"
      currentStep={5}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Picture Upload */}
        <div className="space-y-4">
          {/* was text-white */}
          <Label className="text-foreground">Profile Picture</Label>

          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Profile preview"
                  /* was border-white/20 */
                  className="w-32 h-32 rounded-full object-cover border-4 border-border/60"
                />
              ) : (
                <div
                  /* was bg-white/10 border-white/20 */
                  className="w-32 h-32 rounded-full bg-muted/40 border-4 border-border/60 flex items-center justify-center"
                >
                  {/* was text-white/50 */}
                  <User className="h-16 w-16 text-muted-foreground" />
                </div>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              /* was bg-transparent border-white text-white hover:bg-white/10 */
              className="bg-transparent border-border text-foreground hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-primary/30"
            >
              <Upload className="h-4 w-4 mr-2" />
              Select Photo
            </Button>

            {profilePic && (
              <Button
                type="button"
                onClick={handleUpload}
                disabled={uploading}
                /* was bg-white text-purple-900 hover:bg-white/90 */
                className="bg-primary text-primary-foreground hover:opacity-90"
              >
                {uploading ? "Uploading..." : "Upload Photo"}
              </Button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            /* was bg-transparent border-white text-white hover:bg-white/10 */
            className="flex-1 bg-transparent border-border text-foreground hover:bg-muted/50"
          >
            Previous
          </Button>
          <Button
            type="submit"
            /* was bg-white text-purple-900 hover:bg-white/90 */
            className="flex-1 bg-primary text-primary-foreground hover:opacity-90 font-semibold"
            disabled={loading}
          >
            {loading ? "Continuing..." : "Continue"}
          </Button>
        </div>
      </form>
    </OnboardingLayout>
  );
}
