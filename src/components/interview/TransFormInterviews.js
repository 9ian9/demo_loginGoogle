export function TransFormInterviews(data, classMainText, classSubText) {
  return data.map((item) => {
    const {
      candidateName,
      candidateResumeUrl,
      positionTitle,
      positionLevel,
      interviewerName,
      interviewerJob,
      interviewRound,
      scheduledTime,
      note,
      completed,
      id,
    } = item;

    const transformed = {
      information: {
        mainText: candidateName,
        subText: candidateResumeUrl,
        classMainText: classMainText,
        classSubText: classSubText,
      },
    };

    if (positionTitle) transformed.positionTitle = positionTitle;
    if (positionLevel) transformed.positionLevel = positionLevel;

    return {
      ...transformed,
      interviewer: {
        mainText: interviewerName,
        subText: interviewerJob,
        classMainText: classMainText,
        classSubText: 'text-sm',
      },
      scheduledTime,
      interviewRound,
      ...(note && { note }),
      ...(completed && {completed}),
      id,
    };
  });
}
