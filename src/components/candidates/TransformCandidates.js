export function TransFormCandidates(data, classMainText, classSubText) {
  return data.map(
    ({
      name,
      resumeUrl,
      positionTitle,
      level,
      applicationDate,
      source,
      score,
      status,
      id,
    }) => ({
      information: {
        mainText: name,
        subText: resumeUrl,
        classMainText: classMainText,
        classSubText: classSubText,
      },
      positionTitle,
      level,
      applicationDate,
      source,
      score,
      status,
      id,
    }),
  );
}
