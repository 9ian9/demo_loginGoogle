// export default function ApplyForm() {
//   return (
//     <div className="px-8 flex justify-center ">
//       <div className="flex flex-col w-full max-w-[890px]">
//         <div className="flex justify-between">
//           <p className="font-semibold">Apply form</p>
//           <div className="flex items-center gap-2">
//             <span className="text-sm">Link to form</span>
//             <input type="checkbox" value="synthwave" className="toggle" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
'use client';

import { useState } from 'react';
import api from '@/lib/axiosInstance';

export default function ApplyForm({ jobId }) {
  const [questions, setQuestions] = useState([
    { question: 'Full name' },
    { question: 'Github profile' },
  ]);
  const [googleFormLink, setGoogleFormLink] = useState('');
  const [linkToForm, setLinkToForm] = useState(false);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '' }]);
  };

  const handleChange = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  const handleGenerateForm = async () => {
    try {
      const res = await api.post('/api/create-form', {
        jobId,
        questions,
      });
      setGoogleFormLink(res.data.googleFormLink);
      alert('Form created! Now toggle "Link to form" to view the link.');
    } catch (err) {
      console.error(err);
      alert('Failed to create Google Form.');
    }
  };

  const handleConfirmUseForm = async () => {
    try {
      await api.post('/api/confirm-link', {
        jobId,
        useGoogleForm: true,
      });
      alert('Google Form applied successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to confirm form usage.');
    }
  };

  return (
    <div className="px-8 flex justify-center ">
      <div className="flex flex-col w-full max-w-[890px] gap-2">
        <div className="flex justify-between">
          <p className="font-semibold">Apply form</p>
          <div className="flex items-center gap-2 mb-4">
            <label className="font-medium text-sm">Link to form</label>
            <input
              type="checkbox"
              className="toggle"
              checked={linkToForm}
              onChange={(e) => setLinkToForm(e.target.checked)}
            />
          </div>
        </div>
        {!linkToForm ? (
          <>
            {questions.map((q, idx) => (
              <input
                key={idx}
                value={q.question}
                onChange={(e) => handleChange(idx, e.target.value)}
                placeholder="Type your question"
                className="border p-2 mb-2 w-full"
              />
            ))}
            <button
              onClick={handleAddQuestion}
              className="bg-gray-100 px-3 py-1.5 rounded-lg gap-2 flex items-center w-auto"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM16 27C13.8244 27 11.6977 26.3549 9.88873 25.1462C8.07979 23.9375 6.66989 22.2195 5.83733 20.2095C5.00477 18.1995 4.78693 15.9878 5.21137 13.854C5.63581 11.7202 6.68345 9.7602 8.22183 8.22183C9.76021 6.68345 11.7202 5.6358 13.854 5.21136C15.9878 4.78692 18.1995 5.00476 20.2095 5.83733C22.2195 6.66989 23.9375 8.07979 25.1462 9.88873C26.3549 11.6977 27 13.8244 27 16C26.9967 18.9164 25.8367 21.7123 23.7745 23.7745C21.7123 25.8367 18.9164 26.9967 16 27ZM22 16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17H17V21C17 21.2652 16.8946 21.5196 16.7071 21.7071C16.5196 21.8946 16.2652 22 16 22C15.7348 22 15.4804 21.8946 15.2929 21.7071C15.1054 21.5196 15 21.2652 15 21V17H11C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H15V11C15 10.7348 15.1054 10.4804 15.2929 10.2929C15.4804 10.1054 15.7348 10 16 10C16.2652 10 16.5196 10.1054 16.7071 10.2929C16.8946 10.4804 17 10.7348 17 11V15H21C21.2652 15 21.5196 15.1054 21.7071 15.2929C21.8946 15.4804 22 15.7348 22 16Z"
                  fill="#1F2937"
                />
              </svg>
              <span className="text-[#1F2937] text-sm">Add question</span>
            </button>
            <button
              onClick={handleGenerateForm}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <input
              readOnly
              value={googleFormLink}
              className="border p-2 mb-2 w-full"
            />
            <button
              onClick={handleConfirmUseForm}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
}
