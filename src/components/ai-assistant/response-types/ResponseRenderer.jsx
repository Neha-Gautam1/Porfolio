import AchievementsResponse from "./AchievementsResponse";
import EducationResponse from "./EducationResponse";
import ExperienceResponse from "./ExperienceResponse";
import HobbiesResponse from "./HobbiesResponse";
import ProfileResponse from "./ProfileResponse";
import ProjectDetailResponse from "./ProjectDetailResponse";
import ProjectsResponse from "./ProjectsResponse";
import RecruiterAnswer from "./RecruiterAnswer";
import SkillsResponse from "./SkillsResponse";

/**
 * Maps every response.type from the backend's schema (Part 5:
 * rag/nlu/response_builder.py) to its Generative UI component. "text" has
 * no dedicated component — it's just the plain message bubble already
 * handled in ChatMessage.jsx before this renderer is ever reached.
 */
export default function ResponseRenderer({ response }) {
  if (!response) return null;

  switch (response.type) {
    case "projects":
      return <ProjectsResponse message={response.message} items={response.items} />;
    case "project_detail":
      return <ProjectDetailResponse message={response.message} project={response.project} />;
    case "education":
      return <EducationResponse message={response.message} items={response.items} />;
    case "experience":
      return <ExperienceResponse message={response.message} items={response.items} />;
    case "skills":
      return <SkillsResponse message={response.message} items={response.items} />;
    case "achievements":
      return <AchievementsResponse message={response.message} items={response.items} />;
    case "hobbies":
      return <HobbiesResponse message={response.message} items={response.items} />;
    case "profile":
      return <ProfileResponse message={response.message} />;
    case "recruiter_answer":
      return <RecruiterAnswer message={response.message} />;
    default:
      return <p className="text-sm text-gray-700">{response.message}</p>;
  }
}
