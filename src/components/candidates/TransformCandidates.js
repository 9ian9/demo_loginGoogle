export function TransFormCandidates(data, classMainText, classSubText) {
  return data.map((item) => {
    const {
      name,
      resumeUrl,
      applicationDate,
      source,
      score,
      status,
      id,
      level,
      positionTitle,
    } = item;

    const transformed = {
      information: {
        mainText: name,
        subText: resumeUrl,
        classMainText,
        classSubText,
      },
    };

    if (positionTitle) transformed.positionTitle = positionTitle;
    if (level) transformed.level = level;

    return {
      ...transformed,
      applicationDate,
      source,
      score,
      status,
      id,
    };
  });
}

