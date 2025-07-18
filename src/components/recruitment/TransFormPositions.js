export function TransFormPositions(data, classMainText, classSubText) {
  return data.map(
    ({
      title,
      numberOfPositions,
      numberOfApplicants,
      level,
      location,
      deadline,
      status,
      id,
    }) => ({
      id,
      position: {
        mainText: title,
        subText: `${numberOfPositions} ${numberOfPositions > 1 ? 'positions' : 'position'}`,
        classMainText: classMainText,
        classSubText: 'text-sm text-gray-500',
      },
      numberOfApplicants: `${numberOfApplicants} ${numberOfApplicants > 1 ? 'Candidates' : 'Candidate'}`,
      level,
      location,
      deadline,
      status,
      id,
    }),
  );
}
