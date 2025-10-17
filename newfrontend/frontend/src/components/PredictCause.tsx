// import { useState } from 'react';
// import { ArrowLeft, Search } from 'lucide-react';

// interface PredictCauseProps {
//   onNavigate: (page: string) => void;
// }

// export default function PredictCause({ onNavigate }: PredictCauseProps) {
//   const [formData, setFormData] = useState({
//     symptom: '',
//     severity: '5',
//     duration: '',
//     suspectedFoods: '',
//     additionalInfo: ''
//   });

//   const [result, setResult] = useState<string>('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const analysis = `Based on your input:
// - Symptom: ${formData.symptom}
// - Severity: ${formData.severity}/10
// - Duration: ${formData.duration}
// - Suspected Foods: ${formData.suspectedFoods}

// Potential triggers identified:
// • Common allergens found in mentioned foods
// • Consider keeping a detailed food diary
// • Recommend elimination diet to identify specific triggers
// • Consult with a healthcare professional for personalized advice`;

//     setResult(analysis);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       <div className="container mx-auto px-4 py-8">
//         <button
//           onClick={() => onNavigate('dashboard')}
//           className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           <span className="font-medium">Back to Dashboard</span>
//         </button>

//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl font-bold text-slate-800 mb-8">Predict Cause</h1>

//           <div className="bg-white rounded-2xl shadow-lg p-8">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
//                 <Search className="w-6 h-6 text-white" />
//               </div>
//               <h2 className="text-2xl font-bold text-slate-800">Identify Food Triggers</h2>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Symptom Description
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.symptom}
//                   onChange={(e) => setFormData(prev => ({ ...prev, symptom: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
//                   placeholder="e.g., Headache, stomach discomfort, fatigue..."
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Severity Level (1-10)
//                 </label>
//                 <div className="flex items-center gap-4">
//                   <input
//                     type="range"
//                     min="1"
//                     max="10"
//                     value={formData.severity}
//                     onChange={(e) => setFormData(prev => ({ ...prev, severity: e.target.value }))}
//                     className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
//                   />
//                   <span className="text-2xl font-bold text-orange-600 w-12 text-center">
//                     {formData.severity}
//                   </span>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Duration
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.duration}
//                   onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
//                   placeholder="e.g., 2 hours, all day, 30 minutes..."
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Suspected Foods
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.suspectedFoods}
//                   onChange={(e) => setFormData(prev => ({ ...prev, suspectedFoods: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
//                   placeholder="List foods consumed before symptoms..."
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Additional Information
//                 </label>
//                 <textarea
//                   value={formData.additionalInfo}
//                   onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
//                   rows={4}
//                   placeholder="Any other relevant details..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
//               >
//                 Analyze Potential Causes
//               </button>
//             </form>

//             {result && (
//               <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
//                 <h3 className="font-bold text-slate-800 mb-3 text-lg">Analysis Results</h3>
//                 <pre className="text-slate-700 whitespace-pre-wrap font-sans">{result}</pre>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


//integration1
// import { useState, ChangeEvent, FormEvent } from "react";
// import axios from "axios";

// interface PredictCauseProps {
//   userId: string;
//   onNavigate: (page: string) => void;
// }

// interface SicknessInfo {
//   risk_score: number;
//   status: string;
//   remedies: Record<string, string[]>;
// }

// interface UploadResponse {
//   food: string;
//   sickness_info: SicknessInfo;
//   log: any;
// }

// interface ReportResponse {
//   symptoms: string[];
//   recent_risky_foods: string[];
//   recommendations: string[];
// }

// export default function PredictCause({ userId, onNavigate }: PredictCauseProps) {
//   const [formData, setFormData] = useState({
//     symptom: "",
//     severity: "5",
//     duration: "",
//     suspectedFoods: "",
//     additionalInfo: ""
//   });

//   const [file, setFile] = useState<File | null>(null);
//   const [uploadResult, setUploadResult] = useState<UploadResponse | null>(null);
//   const [reportResult, setReportResult] = useState<ReportResponse | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     setUploadResult(null);
//     setReportResult(null);

//     try {
//       let uploaded: UploadResponse | null = null;

//       // 1️⃣ Upload image if selected
//       if (file) {
//         const formPayload = new FormData();
//         formPayload.append("user_id", userId);
//         formPayload.append("file", file);
//         if (formData.symptom) formPayload.append("symptoms", formData.symptom);

//         const uploadRes = await axios.post<UploadResponse>(
//           "http://127.0.0.1:8000/upload_image/",
//           formPayload,
//           { headers: { "Content-Type": "multipart/form-data" } }
//         );
//         uploaded = uploadRes.data;
//         setUploadResult(uploaded);
//       }

//       // 2️⃣ Report symptoms to fetch recommendations
//       const reportPayload = new FormData();
//       reportPayload.append("user_id", userId);
//       reportPayload.append("symptoms", formData.symptom);
//       reportPayload.append("lookback", "5");

//       const reportRes = await axios.post<ReportResponse>(
//         "http://127.0.0.1:8000/report_symptom/",
//         reportPayload
//       );
//       setReportResult(reportRes.data);
//     } catch (err: any) {
//       console.error(err);
//       setError(err.response?.data?.error || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       <div className="container mx-auto px-4 py-8">
//         <button
//           onClick={() => onNavigate("dashboard")}
//           className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
//         >
//           <span className="text-lg font-medium">← Back to Dashboard</span>
//         </button>

//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl font-bold text-slate-800 mb-8">Predict Cause</h1>

//           <div className="bg-white rounded-2xl shadow-lg p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Food Image (optional)
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   className="block w-full"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Symptom Description
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.symptom}
//                   onChange={(e) =>
//                     setFormData((prev) => ({ ...prev, symptom: e.target.value }))
//                   }
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
//                   placeholder="e.g., Headache, nausea"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Severity Level (1-10)
//                 </label>
//                 <div className="flex items-center gap-4">
//                   <input
//                     type="range"
//                     min="1"
//                     max="10"
//                     value={formData.severity}
//                     onChange={(e) =>
//                       setFormData((prev) => ({ ...prev, severity: e.target.value }))
//                     }
//                     className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
//                   />
//                   <span className="text-2xl font-bold text-orange-600 w-12 text-center">
//                     {formData.severity}
//                   </span>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Duration
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.duration}
//                   onChange={(e) =>
//                     setFormData((prev) => ({ ...prev, duration: e.target.value }))
//                   }
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
//                   placeholder="e.g., 2 hours, all day"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Suspected Foods
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.suspectedFoods}
//                   onChange={(e) =>
//                     setFormData((prev) => ({ ...prev, suspectedFoods: e.target.value }))
//                   }
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
//                   placeholder="Foods consumed before symptoms"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Additional Information
//                 </label>
//                 <textarea
//                   value={formData.additionalInfo}
//                   onChange={(e) =>
//                     setFormData((prev) => ({ ...prev, additionalInfo: e.target.value }))
//                   }
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
//                   rows={4}
//                   placeholder="Any other relevant details..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
//               >
//                 {loading ? "Analyzing..." : "Analyze Potential Causes"}
//               </button>
//             </form>

//             {error && <p className="mt-4 text-red-600">{error}</p>}

//             {/* Upload / Prediction Result */}
//             {uploadResult && (
//               <div className="mt-6 p-4 border-l-4 border-orange-500 bg-orange-50 rounded-lg">
//                 <h3 className="font-bold text-slate-800 mb-2 text-lg">Food Prediction</h3>
//                 <p>
//                   <strong>Food Detected:</strong> {uploadResult.food}
//                 </p>
//                 <p>
//                   <strong>Risk Status:</strong> {uploadResult.sickness_info.status} (
//                   {uploadResult.sickness_info.risk_score})
//                 </p>
//                 {Object.keys(uploadResult.sickness_info.remedies).length > 0 && (
//                   <div className="mt-2">
//                     <strong>Remedies:</strong>
//                     <ul className="list-disc list-inside">
//                       {Object.entries(uploadResult.sickness_info.remedies).map(
//                         ([symptom, meds]) => (
//                           <li key={symptom}>
//                             <strong>{symptom}:</strong> {meds.join(", ")}
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Reported Symptoms & Recommendations */}
//             {reportResult && (
//               <div className="mt-6 p-4 border-l-4 border-orange-600 bg-orange-100 rounded-lg">
//                 <h3 className="font-bold text-slate-800 mb-2 text-lg">Analysis Summary</h3>
//                 <p>
//                   <strong>Reported Symptoms:</strong> {reportResult.symptoms.join(", ")}
//                 </p>
//                 <p>
//                   <strong>High-Risk Foods:</strong>{" "}
//                   {reportResult.recent_risky_foods.length
//                     ? reportResult.recent_risky_foods.join(", ")
//                     : "None"}
//                 </p>
//                 {reportResult.recommendations.length > 0 && (
//                   <div className="mt-2">
//                     <strong>Recommendations:</strong>
//                     <ul className="list-disc list-inside">
//                       {reportResult.recommendations.map((rec, i) => (
//                         <li key={i}>{rec}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


//integration 2
// import { useState, useEffect } from 'react';
// import { ArrowLeft, Search } from 'lucide-react';
// import axios from 'axios';

// interface PredictCauseProps {
//   onNavigate: (page: string) => void;
//   userId: string; // Logged-in user's ID
// }

// interface RiskData {
//   food: string;
//   remedies: { [symptom: string]: string[] };
// }

// export default function PredictCause({ onNavigate, userId }: PredictCauseProps) {
//   const [formData, setFormData] = useState({
//     symptom: '',
//     severity: '5',
//     duration: '',
//     suspectedFoods: '',
//     additionalInfo: ''
//   });

//   const [analysisResult, setAnalysisResult] = useState<string>('');
//   const [previousRisks, setPreviousRisks] = useState<RiskData[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch past risky foods & remedies
//     const fetchPastRisks = async () => {
//       try {
//         const res = await axios.post('http://localhost:8000/report_symptom/', new URLSearchParams({
//           user_id: userId,
//           symptoms: '',
//           lookback: '7'
//         }), {
//           headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//         });

//         const risks = res.data.recent_risky_foods || [];
//         const combinedRemedies = res.data.recommendations || [];

//         const riskData: RiskData[] = risks.map((food: string, idx: number) => ({
//           food,
//           remedies: combinedRemedies[idx]?.split('. Remedies: ')[1]?.split(', ').reduce((acc: any, item: string) => {
//             const [symptom, meds] = item.split(': ');
//             acc[symptom] = meds?.split(', ') || [];
//             return acc;
//           }, {}) || {}
//         }));

//         setPreviousRisks(riskData);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching previous risks:', err);
//         setLoading(false);
//       }
//     };

//     fetchPastRisks();
//   }, [userId]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Compose analysis string
//     const analysis = `Based on your input:
// - Symptom: ${formData.symptom}
// - Severity: ${formData.severity}/10
// - Duration: ${formData.duration}
// - Suspected Foods: ${formData.suspectedFoods}
// - Additional Info: ${formData.additionalInfo}

// Recommendations:
// • Keep a detailed food and symptom diary.
// • Avoid suspected foods if recurring.
// • Consider consulting a healthcare professional.`;

//     setAnalysisResult(analysis);

//     // Report new symptom to backend
//     try {
//       await axios.post('http://localhost:8000/report_symptom/', new URLSearchParams({
//         user_id: userId,
//         symptoms: formData.symptom,
//         lookback: '5'
//       }), {
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//       });
//     } catch (err) {
//       console.error('Error reporting symptom:', err);
//     }
//   };

//   if (loading) return <div className="text-center mt-20">Loading previous risks...</div>;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       <div className="container mx-auto px-4 py-8">
//         <button
//           onClick={() => onNavigate('dashboard')}
//           className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           <span className="font-medium">Back to Dashboard</span>
//         </button>

//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl font-bold text-slate-800 mb-8">Predict Cause</h1>

//           <div className="bg-white rounded-2xl shadow-lg p-8">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
//                 <Search className="w-6 h-6 text-white" />
//               </div>
//               <h2 className="text-2xl font-bold text-slate-800">Identify Food Triggers</h2>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Symptom Description</label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.symptom}
//                   onChange={e => setFormData(prev => ({ ...prev, symptom: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
//                   placeholder="e.g., Headache, nausea..."
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Severity Level (1-10)</label>
//                 <div className="flex items-center gap-4">
//                   <input
//                     type="range"
//                     min="1"
//                     max="10"
//                     value={formData.severity}
//                     onChange={e => setFormData(prev => ({ ...prev, severity: e.target.value }))}
//                     className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
//                   />
//                   <span className="text-2xl font-bold text-orange-600 w-12 text-center">{formData.severity}</span>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Duration</label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.duration}
//                   onChange={e => setFormData(prev => ({ ...prev, duration: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
//                   placeholder="e.g., 2 hours, all day..."
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Suspected Foods</label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.suspectedFoods}
//                   onChange={e => setFormData(prev => ({ ...prev, suspectedFoods: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
//                   placeholder="List foods consumed before symptoms..."
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Information</label>
//                 <textarea
//                   value={formData.additionalInfo}
//                   onChange={e => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
//                   rows={4}
//                   placeholder="Any other relevant details..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
//               >
//                 Analyze Potential Causes
//               </button>
//             </form>

//             {analysisResult && (
//               <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
//                 <h3 className="font-bold text-slate-800 mb-3 text-lg">Analysis Results</h3>
//                 <pre className="text-slate-700 whitespace-pre-wrap font-sans">{analysisResult}</pre>
//               </div>
//             )}

//             {previousRisks.length > 0 && (
//               <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg">
//                 <h3 className="font-bold text-slate-800 mb-3 text-lg">Past High-Risk Foods & Remedies</h3>
//                 {previousRisks.map((risk, idx) => (
//                   <div key={idx} className="mb-4">
//                     <p className="font-semibold text-slate-700">{risk.food}</p>
//                     {Object.entries(risk.remedies).map(([symptom, meds], i) => (
//                       <p key={i} className="text-sm text-slate-600">
//                         {symptom}: {meds.join(', ') || 'No remedies'}
//                       </p>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
//integration 3
import { useEffect, useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import axios from 'axios';
import { FoodLog } from '../types';
import { Page } from '../types';

interface PredictCauseProps {
  // onNavigate: (page: string) => void;
  onNavigate: (page: Page) => void;
  userId: string; // Logged-in user's ID
}

interface RiskData {
  food: string;
  remedies: { [symptom: string]: string[] };
}

export default function PredictCause({ onNavigate, userId }: PredictCauseProps) {
  const [formData, setFormData] = useState({
    symptom: '',
    severity: '5',
    duration: '',
    suspectedFoods: '',
    additionalInfo: ''
  });

  const [result, setResult] = useState<string>('');
  const [lastLog, setLastLog] = useState<FoodLog | null>(null);
  const [previousRisks, setPreviousRisks] = useState<RiskData[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch last food log from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('foodLogs');
      if (!raw) return;
      const logs: FoodLog[] = JSON.parse(raw);
      if (!Array.isArray(logs) || logs.length === 0) return;
      const last = logs
        .slice()
        .sort((a, b) => +new Date(b.consumedAt) - +new Date(a.consumedAt))[0];
      setLastLog(last);

      if (!formData.suspectedFoods) {
        const text = `${last.foodName ?? ''} ${last.notes ?? ''}`.trim();
        if (text) setFormData(prev => ({ ...prev, suspectedFoods: text }));
      }
    } catch {
      // ignore
    }
  }, [formData.suspectedFoods]);

  // Fetch previous risky foods & remedies from backend
  useEffect(() => {
    const fetchPreviousRisks = async () => {
      try {
        const res = await axios.post('http://localhost:8000/report_symptom/', new URLSearchParams({
          user_id: userId,
          symptoms: '', // blank to fetch past data
          lookback: '7'
        }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        const risks = res.data.recent_risky_foods || [];
        const combinedRemedies = res.data.recommendations || [];

        const riskData: RiskData[] = risks.map((food: string, idx: number) => ({
          food,
          remedies: combinedRemedies[idx]?.split('. Remedies: ')[1]?.split(', ').reduce((acc: any, item: string) => {
            const [symptom, meds] = item.split(': ');
            acc[symptom] = meds?.split(', ') || [];
            return acc;
          }, {}) || {}
        }));

        setPreviousRisks(riskData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching previous risks:', err);
        setLoading(false);
      }
    };

    fetchPreviousRisks();
  }, [userId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const inferredLine = lastLog
      ? `\nInferred from last food log: ${lastLog.foodName ?? 'image-only'} (${lastLog.mealType}) at ${new Date(lastLog.consumedAt).toLocaleString()}${lastLog.notes ? `\nNotes: ${lastLog.notes}` : ''}`
      : '';

    const analysis = `Based on your input:
- Symptom: ${formData.symptom}
- Severity: ${formData.severity}/10
- Duration: ${formData.duration}
- Suspected Foods: ${formData.suspectedFoods}
${inferredLine}

Potential triggers identified:
• Common allergens found in mentioned foods
• Consider keeping a detailed food diary
• Recommend elimination diet to identify specific triggers
• Consult with a healthcare professional for personalized advice`;

    setResult(analysis);

    // Report new symptom to backend
    try {
      await axios.post('http://localhost:8000/report_symptom/', new URLSearchParams({
        user_id: userId,
        symptoms: formData.symptom,
        lookback: '5'
      }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
    } catch (err) {
      console.error('Error reporting symptom:', err);
    }
  };

  const analyzeFromLastLog = () => {
    if (!lastLog) return;
    const suspected = `${lastLog.foodName ?? ''} ${lastLog.notes ?? ''}`.trim() || 'Unknown';
    const analysis = `Based on your recent log:
- Food: ${lastLog.foodName ?? 'image-only'} (${lastLog.mealType})
- Time: ${new Date(lastLog.consumedAt).toLocaleString()}
${lastLog.notes ? `- Notes: ${lastLog.notes}` : ''}

Potential triggers identified:
• Common allergens possibly present in the logged foods
• Consider an elimination trial for suspect items
• Track symptom timing relative to meals for patterns
• Consult a professional for personalized guidance`;
    setFormData(prev => ({ ...prev, suspectedFoods: suspected }));
    setResult(analysis);
  };

  if (loading) return <div className="text-center mt-20">Loading previous risks...</div>;

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
          <h1 className="text-4xl font-bold text-slate-800 mb-8">Predict Cause</h1>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Identify Food Triggers</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Symptom Description
                </label>
                <input
                  type="text"
                  required
                  value={formData.symptom}
                  onChange={(e) => setFormData(prev => ({ ...prev, symptom: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="e.g., Headache, nausea..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Severity Level (1-10)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={formData.severity}
                    onChange={(e) => setFormData(prev => ({ ...prev, severity: e.target.value }))}
                    className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <span className="text-2xl font-bold text-orange-600 w-12 text-center">{formData.severity}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  required
                  value={formData.duration}
                  onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="e.g., 2 hours, all day..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Suspected Foods
                </label>
                <input
                  type="text"
                  required
                  value={formData.suspectedFoods}
                  onChange={(e) => setFormData(prev => ({ ...prev, suspectedFoods: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Foods eaten before symptoms..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  rows={4}
                  placeholder="Any other relevant details..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
              >
                Analyze Potential Causes
              </button>

              <button
                type="button"
                onClick={analyzeFromLastLog}
                className="w-full mt-3 bg-white border border-orange-300 text-orange-700 font-semibold py-3 rounded-lg hover:bg-orange-50 transition-all"
              >
                Analyze From Last Log
              </button>
            </form>

            {result && (
              <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Analysis Results</h3>
                <pre className="text-slate-700 whitespace-pre-wrap font-sans">{result}</pre>
              </div>
            )}

            {previousRisks.length > 0 && (
              <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg">
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Past High-Risk Foods & Remedies</h3>
                {previousRisks.map((risk, idx) => (
                  <div key={idx} className="mb-4">
                    <p className="font-semibold text-slate-700">{risk.food}</p>
                    {Object.entries(risk.remedies).map(([symptom, meds], i) => (
                      <p key={i} className="text-sm text-slate-600">
                        {symptom}: {meds.join(', ') || 'No remedies'}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
