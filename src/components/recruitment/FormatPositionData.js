import { InfoItem } from '../table/ui/InfoItem';
import { StatusItem } from '../table/ui/StatusItem';

export function FormatPositionData(dataList) {
  return dataList.map((data) => {
    return {
      id: data.id,
      position: (
        <InfoItem
          data={{
            mainText: data.title,
            subText: `${data.numberOfPositions} ${data.numberOfPositions > 1 ? 'positions' : 'position'}`,
            classMainText: 'text-base font-semibold',
            classSubText: 'text-sm text-gray-500',
          }}
        />
      ),
      numberOfApplicants: `${data.numberOfApplicants} ${data.numberOfApplicants > 1 ? 'Candidates' : 'Candidate'}`,
      level: data.level,
      location: data.location,
      deadline: new Date(data.deadline).toLocaleDateString(),
      status: <StatusItem status={data.status} />,
    };
  });
}
