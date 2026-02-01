"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, AlertCircle } from "lucide-react";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import {
  uploadAadhar,
  uploadPancard,
  submitAstroData,
  fetchAstroOnboardingInfo,
  setAstroProfile,
  AUTH_EVENT,
} from "@/utils/astroUtils";

export default function KYC() {
  const router = useRouter();

  const [aadharFile, setAadharFile] = useState(null);
  const [panFile, setPanFile] = useState(null);
  const [aadharUrl, setAadharUrl] = useState("");
  const [panUrl, setPanUrl] = useState("");
  const [uploadingAadhar, setUploadingAadhar] = useState(false);
  const [uploadingPan, setUploadingPan] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // IMPORTANT: start as {} so optional chaining isn't required everywhere
  const [storedData, setStoredData] = useState({});

  useEffect(() => {
    try {
      const data = localStorage.getItem("astroOnboarding");
      if (data) setStoredData(JSON.parse(data) || {});
    } catch {
      setStoredData({});
    }
  }, []);

  const handleFileSelect = (setFile, setPreview) => (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  //  fixed signature: accept (file, type)
  const handleUpload = async (file, type) => {
    if (!file) return;

    const setUploading = type === "aadhar" ? setUploadingAadhar : setUploadingPan;
    const setUrl = type === "aadhar" ? setAadharUrl : setPanUrl;
    const uploadFn = type === "aadhar" ? uploadAadhar : uploadPancard;

    setUploading(true);
    try {
      const response = await uploadFn(file);
      if (response.statusCode === 200) {
        const next = { ...storedData, [type]: response.data };

        setStoredData(next);
        setUrl(response.data);

        // keep local cache in case of reload
        try {
          localStorage.setItem("astroOnboarding", JSON.stringify(next));
        } catch {}

        alert(`${type.toUpperCase()} uploaded successfully!`);
      } else {
        alert(response.message || "Upload failed");
      }
    } catch (error) {
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  safe read with optional chaining
    if (!storedData?.aadhar || !storedData?.pancard) {
      alert("Please upload both Aadhar and PAN card");
      return;
    }

    setSubmitting(true);
    try {
      const finalData = {
        ...storedData,
        dob: storedData?.dob || "",
      };

      const response = await submitAstroData(finalData);

      if (response.statusCode === 200) {
        // Fetch fresh profile for header/avatar
        const info = await fetchAstroOnboardingInfo();
        if (info) setAstroProfile(info);

        // Mark complete and notify header immediately
        localStorage.removeItem("astroOnboarding");
        localStorage.setItem("astroOnboardingComplete", "true");
        window.dispatchEvent(new Event(AUTH_EVENT));

        router.push("/astro-success");
      } else {
        alert(response.message || "Submission failed");
      }
    } catch (error) {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleBack = () => router.back();

  return (
    <OnboardingLayout
      title="KYC Verification"
      description="Upload your documents for identity verification and platform security"
      currentStep={6}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* KYC Notice */}
        <Alert className="bg-muted/40 border-border">
          <AlertCircle className="h-4 w-4 text-muted-foreground" />
          <AlertDescription className="text-foreground">
            For security and authenticity, please upload clear photos of your
            original Aadhar and PAN cards.
          </AlertDescription>
        </Alert>

        {/* Aadhar Upload */}
        <div className="space-y-3">
          <Label className="text-foreground">Aadhar Card</Label>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect(setAadharFile, setAadharUrl)}
              className="hidden"
              id="aadhar-upload"
            />
            <label
              htmlFor="aadhar-upload"
              className="flex-1 p-4 border-2 border-dashed border-border/60 rounded-lg cursor-pointer hover:border-border transition-colors bg-background"
            >
              <div className="text-center">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground text-sm">
                  Click to upload Aadhar card
                </p>
              </div>
            </label>
            {aadharFile && (
              <Button
                type="button"
                onClick={() => handleUpload(aadharFile, "aadhar")}
                disabled={uploadingAadhar}
                className="bg-primary text-primary-foreground hover:opacity-90"
              >
                {uploadingAadhar ? "Uploading..." : "Upload"}
              </Button>
            )}
          </div>
          {aadharUrl && (
            <p className="text-sm text-emerald-500">✓ Aadhar card uploaded</p>
          )}
        </div>

        {/* PAN Upload */}
        <div className="space-y-3">
          <Label className="text-foreground">PAN Card</Label>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect(setPanFile, setPanUrl)}
              className="hidden"
              id="pan-upload"
            />
            <label
              htmlFor="pan-upload"
              className="flex-1 p-4 border-2 border-dashed border-border/60 rounded-lg cursor-pointer hover:border-border transition-colors bg-background"
            >
              <div className="text-center">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground text-sm">
                  Click to upload PAN card
                </p>
              </div>
            </label>
            {panFile && (
              <Button
                type="button"
                onClick={() => handleUpload(panFile, "pancard")}
                disabled={uploadingPan}
                className="bg-primary text-primary-foreground hover:opacity-90"
              >
                {uploadingPan ? "Uploading..." : "Upload"}
              </Button>
            )}
          </div>
          {panUrl && (
            <p className="text-sm text-emerald-500">✓ PAN card uploaded</p>
          )}
        </div>

        {/* Requirements */}
        <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
          <h4 className="text-foreground font-semibold mb-2">Requirements:</h4>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>• Clear, readable photos of original documents</li>
            <li>• File size should not exceed 1MB</li>
            <li>• No photocopies or screenshots</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            className="flex-1 bg-transparent border-border text-foreground hover:bg-muted/50"
          >
            Previous
          </Button>
          <Button
            type="submit"
            className="flex-1 bg-primary text-primary-foreground hover:opacity-90 font-semibold"
       
            disabled={submitting || !(storedData?.aadhar && storedData?.pancard)}
          >
            {submitting ? "Submitting..." : "Complete Registration"}
          </Button>
        </div>
      </form>
    </OnboardingLayout>
  );
}
