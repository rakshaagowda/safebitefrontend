
// //after integrating with FASTAPI
// // frontend/src/components/PredictMedical.tsx
// import { useState } from "react";
// import { ArrowLeft, Stethoscope } from "lucide-react";
// import { uploadFoodImage, reportSymptoms } from "../api"; // ✅ relative import

// interface PredictMedicalProps {
//   onNavigate: (page: string) => void;
// }

// export default function PredictMedical({ onNavigate }: PredictMedicalProps) {
//   const [userId, setUserId] = useState("user123");
//   const [formData, setFormData] = useState({
//     symptoms: "",
//     duration: "",
//     frequency: "",
//     medicalHistory: "",
//     currentMedications: "",
//     dietaryRestrictions: "",
//   });

//   const [file, setFile] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState<any>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.symptoms.trim()) {
//       alert("Please describe your symptoms before submitting.");
//       return;
//     }

//     setLoading(true);
//     setResult(null);

//     try {
//       // Step 1: Report symptoms to backend
//       const symptomRes = await reportSymptoms(userId, formData.symptoms);

//       // Step 2: Upload food image if provided
//       let foodRes = null;
//       if (file) {
//         foodRes = await uploadFoodImage(userId, file, formData.symptoms);
//       }

//       // Combine results
//       setResult({
//         symptomAnalysis: symptomRes,
//         foodAnalysis: foodRes,
//       });
//     } catch (error: any) {
//       console.error("❌ Prediction error:", error);
//       alert(error?.detail || "An error occurred while analyzing data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       <div className="container mx-auto px-4 py-8">
//         {/* Back Button */}
//         <button
//           onClick={() => onNavigate("dashboard")}
//           className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           <span className="font-medium">Back to Dashboard</span>
//         </button>

//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl font-bold text-slate-800 mb-8">Predict Medical</h1>

//           <div className="bg-white rounded-2xl shadow-lg p-8">
//             {/* Header */}
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl">
//                 <Stethoscope className="w-6 h-6 text-white" />
//               </div>
//               <h2 className="text-2xl font-bold text-slate-800">Medical Insights</h2>
//             </div>

//             {/* Info Box */}
//             <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
//               <p className="text-sm text-yellow-800 font-medium">
//                 ⚠️ This tool provides general information only. Always consult healthcare professionals.
//               </p>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* User ID */}
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">User ID</label>
//                 <input
//                   type="text"
//                   value={userId}
//                   onChange={(e) => setUserId(e.target.value)}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
//                 />
//               </div>

//               {/* Symptoms */}
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Symptoms</label>
//                 <textarea
//                   required
//                   value={formData.symptoms}
//                   onChange={(e) => setFormData((prev) => ({ ...prev, symptoms: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
//                   rows={3}
//                   placeholder="Describe your symptoms..."
//                 />
//               </div>

//               {/* Duration */}
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Duration</label>
//                 <input
//                   type="text"
//                   value={formData.duration}
//                   onChange={(e) => setFormData((prev) => ({ ...prev, duration: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                   placeholder="e.g., 2 weeks"
//                 />
//               </div>

//               {/* Frequency */}
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Frequency</label>
//                 <input
//                   type="text"
//                   value={formData.frequency}
//                   onChange={(e) => setFormData((prev) => ({ ...prev, frequency: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                   placeholder="e.g., Daily, after meals..."
//                 />
//               </div>

//               {/* Food Image */}
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Upload Food Image (optional)</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
//                   className="w-full px-4 py-2 border border-slate-300 rounded-lg"
//                 />
//               </div>

//               {/* Medical History */}
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Medical History</label>
//                 <textarea
//                   value={formData.medicalHistory}
//                   onChange={(e) => setFormData((prev) => ({ ...prev, medicalHistory: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
//                   rows={2}
//                   placeholder="Previous diagnoses, allergies, family history..."
//                 />
//               </div>

//               {/* Current Medications */}
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Current Medications</label>
//                 <input
//                   type="text"
//                   value={formData.currentMedications}
//                   onChange={(e) => setFormData((prev) => ({ ...prev, currentMedications: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                   placeholder="List your current medications..."
//                 />
//               </div>

//               {/* Dietary Restrictions */}
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Dietary Restrictions or Allergies</label>
//                 <input
//                   type="text"
//                   value={formData.dietaryRestrictions}
//                   onChange={(e) => setFormData((prev) => ({ ...prev, dietaryRestrictions: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                   placeholder="e.g., lactose intolerant, nut allergy..."
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
//               >
//                 {loading ? "Analyzing..." : "Generate Medical Insights"}
//               </button>
//             </form>

//             {/* Result */}
//             {result && (
//               <div className="mt-8 p-6 bg-cyan-50 border-l-4 border-cyan-500 rounded-lg">
//                 <h3 className="font-bold text-slate-800 mb-3 text-lg">Medical Assessment</h3>
//                 <pre className="text-slate-700 whitespace-pre-wrap font-sans text-sm">
//                   {JSON.stringify(result, null, 2)}
//                 </pre>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// frontend/src/components/PredictMedical.tsx
import { useEffect, useState } from 'react';
import { ArrowLeft, Stethoscope } from 'lucide-react';
import { reportSymptoms, setAllergies } from '../api';
import { FoodLog } from '../types';
import { Page } from '../types';

interface PredictMedicalProps {
    onNavigate: (page: Page) => void;
}

export default function PredictMedical({ onNavigate }: PredictMedicalProps) {
  const [userId, setUserId] = useState('user123');
  const [formData, setFormData] = useState({
    symptoms: '',
    duration: '',
    frequency: '',
    medicalHistory: '',
    currentMedications: '',
    dietaryRestrictions: ''
  });

  const [allergies, setAllergiesInput] = useState('');
  const [result, setResult] = useState<string>('');
  const [lastLog, setLastLog] = useState<FoodLog | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('foodLogs');
      if (!raw) return;
      const logs: FoodLog[] = JSON.parse(raw);
      if (!Array.isArray(logs) || logs.length === 0) return;
      const last = logs.slice().sort((a, b) => +new Date(b.consumedAt) - +new Date(a.consumedAt))[0];
      setLastLog(last);
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.symptoms.trim()) {
      alert('Please enter your symptoms.');
      return;
    }

    setLoading(true);
    setResult('');

    try {
      // Report symptoms
      const symptomRes = await reportSymptoms(userId, formData.symptoms);

      // Set allergies if any
      if (allergies.trim()) {
        const allergyArray = allergies.split(',').map(a => a.trim()).filter(a => a);
        await setAllergies(userId, allergyArray);
      }

      // Combine analysis with last log info
      const inferredLine = lastLog
        ? `\nRecent food log: ${lastLog.foodName ?? 'image-only'} (${lastLog.mealType}) at ${new Date(lastLog.consumedAt).toLocaleString()}${lastLog.notes ? `\nNotes: ${lastLog.notes}` : ''}`
        : '';

      const analysis = `Medical Assessment Summary:

Symptoms Reported: ${formData.symptoms}
Duration: ${formData.duration || 'Not specified'}
Frequency: ${formData.frequency || 'Not specified'}
Medical History: ${formData.medicalHistory || 'Not specified'}
Current Medications: ${formData.currentMedications || 'None reported'}
Dietary Restrictions: ${formData.dietaryRestrictions || 'None reported'}
${inferredLine}

Preliminary Insights:
• Based on your symptoms, consider consulting with a healthcare provider
• Track symptom patterns in relation to specific foods
• Keep a detailed log for your medical appointments
• Consider allergy testing if symptoms are consistent

IMPORTANT DISCLAIMER:
This is NOT a medical diagnosis. Please consult qualified healthcare professionals for:
- Persistent or severe symptoms
- Sudden changes in health
- Any concerns about food allergies or intolerances
- Personalized medical advice

Recommended Actions:
1. Schedule an appointment with your primary care physician
2. Continue logging food intake and symptoms
3. Share this information with your healthcare provider
4. Consider consulting an allergist or nutritionist`;

      setResult(analysis);
    } catch (err: any) {
      console.error(err);
      alert(err?.detail || 'Error analyzing data.');
    } finally {
      setLoading(false);
    }
  };

  const analyzeFromLastLog = () => {
    if (!lastLog) return;
    const info = `Recent food log: ${lastLog.foodName ?? 'image-only'} (${lastLog.mealType}) at ${new Date(lastLog.consumedAt).toLocaleString()}${lastLog.notes ? `\nNotes: ${lastLog.notes}` : ''}`;
    const analysis = `Medical Assessment (from last log)\n\n${info}\n\nPreliminary Insights:\n• Monitor any symptoms within 2-6 hours post meal\n• If symptoms recur, consider specific intolerance testing\n• Keep logging to correlate foods and reactions\n\nDisclaimer: Not a diagnosis. Consult licensed professionals for medical advice.`;
    setResult(analysis);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Dashboard</span>
        </button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">Predict Medical</h1>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Medical Insights</h2>
            </div>

            <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <p className="text-sm text-yellow-800 font-medium">
                This tool provides general information only. Always consult healthcare professionals for medical advice.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">User ID</label>
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Symptoms</label>
                <textarea
                  required
                  value={formData.symptoms}
                  onChange={(e) => setFormData(prev => ({ ...prev, symptoms: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  rows={3}
                  placeholder="Describe your symptoms in detail..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Duration of Symptoms</label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="e.g., 2 weeks, 3 days..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Frequency of Occurrence</label>
                <input
                  type="text"
                  value={formData.frequency}
                  onChange={(e) => setFormData(prev => ({ ...prev, frequency: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="e.g., Daily, 2-3 times per week..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Allergies (comma-separated)</label>
                <input
                  type="text"
                  value={allergies}
                  onChange={(e) => setAllergiesInput(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="e.g., lactose, peanuts"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Medical History</label>
                <textarea
                  value={formData.medicalHistory}
                  onChange={(e) => setFormData(prev => ({ ...prev, medicalHistory: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  rows={2}
                  placeholder="Previous diagnoses, allergies, family history..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Current Medications</label>
                <input
                  type="text"
                  value={formData.currentMedications}
                  onChange={(e) => setFormData(prev => ({ ...prev, currentMedications: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="List any medications you're currently taking..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Dietary Restrictions</label>
                <input
                  type="text"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="e.g., lactose intolerant, nut allergy..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {loading ? 'Analyzing...' : 'Generate Medical Insights'}
              </button>

              <button
                type="button"
                onClick={analyzeFromLastLog}
                className="w-full mt-3 bg-white border border-cyan-300 text-cyan-700 font-semibold py-3 rounded-lg hover:bg-cyan-50 transition-all"
              >
                Analyze From Last Log
              </button>
            </form>

            {result && (
              <div className="mt-8 p-6 bg-cyan-50 border-l-4 border-cyan-500 rounded-lg">
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Medical Assessment</h3>
                <pre className="text-slate-700 whitespace-pre-wrap font-sans">{result}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
