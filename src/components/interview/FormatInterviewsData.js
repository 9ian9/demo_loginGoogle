import { InfoItem } from '../table/ui/InfoItem';
import { StatusItem } from '../table/ui/StatusItem';
import { ChangeDateDisplay } from '../table/helperComponents/ChangeDateDisplay';

export function FormatInterviewsData(dataList, sameId) {
  const classMainText = 'text-base font-semibold';
  return dataList.map((data) => {
    const {
      candidateName,
      candidateResumeUrl,
      positionTitle,
      positionLevel,
      interviewerName,
      interviewerJob,
      interviewRound,
      scheduledTime,
      feedback,
      result,
      id,
    } = data;

    const formatData = {
      name: (
        <InfoItem
          data={{
            mainText: candidateName,
            subText: candidateResumeUrl,
            classMainText: classMainText,
            classSubText: 'text-sm text-[#0091FF]',
          }}
        />
      ),
    };

    if (!sameId) {
      formatData.position = positionTitle;
      formatData.level = positionLevel;
    }

    return {
      ...formatData,
      interviewer: (
        <InfoItem
          data={{
            mainText: interviewerName,
            subText: interviewerJob,
            classMainText: classMainText,
            classSubText: 'text-sm',
          }}
        />
      ),
      schedule: <ChangeDateDisplay isoDate={scheduledTime} includeTime={true} />,
      status: <StatusItem status={interviewRound} />,
      // feedback,
      // result,
      id,
    };
  });
}
