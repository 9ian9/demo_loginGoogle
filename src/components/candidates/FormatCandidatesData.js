import { InfoItem } from '../table/ui/InfoItem';
import { StatusItem } from '../table/ui/StatusItem';
import { SourceItem } from '../table/ui/SourceItem';
import { ChangeDateDisplay } from '../table/helperComponents/ChangeDateDisplay';

export function FormatCandidatesData(dataList, sameId) {
  const classMainText = 'text-base font-semibold';
  const classSubText = 'text-sm text-[#0091FF]';
  return dataList.map((data) => {
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
    } = data;

    const formatData = {
      name: (
        <InfoItem
          data={{
            mainText: name,
            subText: resumeUrl,
            classMainText: classMainText,
            classSubText: classSubText,
          }}
        />
      ),
    };

    if (!sameId) {
      formatData.position = positionTitle;
      formatData.level = level;
    }

    return {
      ...formatData,
      dateApplies: <ChangeDateDisplay isoDate={applicationDate} />,
      from: <SourceItem source={source}/>,
      score,
      status: <StatusItem status={status}/>,
      id,
    };
  });
}
