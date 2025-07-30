import { InfoItem } from '../table/ui/InfoItem';
import { StatusItem } from '../table/ui/StatusItem';

export function FormatPositionData(dataList) {
  return dataList.map((data) => {
    const {
      id,
      title,
      numberOfPositions,
      numberOfApplicants,
      level,
      location,
      deadline,
      status,
    } = data;

    return {
      id: id,
      position: (
        <InfoItem
          data={{
            mainText: title,
            subText: `${numberOfPositions} ${numberOfPositions > 1 ? 'positions' : 'position'}`,
            classMainText: 'text-base font-semibold',
            classSubText: 'text-sm text-gray-500',
          }}
        />
      ),
      numberOfApplicants: `${numberOfApplicants} ${numberOfApplicants > 1 ? 'Candidates' : 'Candidate'}`,
      level,
      location,
      deadline: new Date(deadline).toLocaleDateString(),
      status: <StatusItem status={status} />,
    };
  });
}
