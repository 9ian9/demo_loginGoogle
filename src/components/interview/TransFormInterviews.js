export function TransFormInterviews(data, classMainText, classSubText) {
  return data.map((item) => {
    // const {
    //   candidateName,
    //   candidateResumeUrl,
    //   positionTitle,
    //   positionLevel,
    //   interviewerName,
    //   interviewerJob,
    //   interviewRound,
    //   scheduledTime,
    //   id,
    // }) => ({
    //   information: {
    //     mainText: candidateName,
    //     subText: candidateResumeUrl,
    //     classMainText: classMainText,
    //     classSubText: classSubText,
    //   },
    //   positionTitle,
    //   positionLevel,
    //   interviewer: {
    //     mainText: interviewerName,
    //     subText: interviewerJob,
    //     classMainText: classMainText,
    //     classSubText: 'text-sm',
    //   },
    //   scheduledTime,
    //   interviewRound,
    //   id,
    // };
    const {
      candidateName,
      candidateResumeUrl,
      positionTitle,
      positionLevel,
      interviewerName,
      interviewerJob,
      interviewRound,
      scheduledTime,
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
      id,
    };
  });
}
