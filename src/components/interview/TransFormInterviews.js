export function TransFormInterviews(data, classMainText, classSubText){
    return data.map(({ candidateName, candidateResumeUrl, positionTitle, positionLevel, interviewerName, interviewerJob, interviewerRound, scheduledTime, id }) => ({
        information: {
            mainText: candidateName,
            subText: candidateResumeUrl,
            classMainText: classMainText,
            classSubText: classSubText,
        },
        positionTitle,
        positionLevel,
        interviewer:
        {
            mainText: interviewerName,
            subText: interviewerJob,
            classMainText: classMainText,
            classSubText: "text-sm"
        },
        scheduledTime,
        interviewerRound, 
        id
    }));
}