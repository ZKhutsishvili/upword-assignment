import BlogPostIcon from "../icons/BlogPost";
import ChatIcon from "../icons/Chat";
import CompanyReportIcon from "../icons/CompanyReport";
import CompetitorsReportIcon from "../icons/CompetitorsReport";
import EssayIcon from "../icons/Essay";
import InvestmentsMemoIcon from "../icons/InvestmentMemo";
import MarketReportIcon from "../icons/MarketReport";
import NewsletterIcon from "../icons/Newsletter";
import PencilIcon from "../icons/Pencil";
import PresentationIcon from "../icons/Presentation";
import StudyGuideIcon from "../icons/StudyGuide";

export const dummyTemplates = [
    {
        id: 1,
        label: "Company report",
        tooltipText: "Get a full report about a market you’re interested in",
        Icon: CompanyReportIcon
    },
    {
        id: 2,
        label: "Competitors report",
        tooltipText: "Get a full report about a market you’re interested in",
        Icon: CompetitorsReportIcon
    },
    {
        id: 3,
        label: "Market report",
        tooltipText: "Get a full report about a market you’re interested in",
        Icon: MarketReportIcon
    },
    {
        id: 4,
        label: "Investment memo",
        tooltipText: "Get a full report about a market you’re interested in",
        Icon: InvestmentsMemoIcon
    },
    {
        id: 5,
        label: "Presentation",
        tooltipText: "Get a full report about a market you’re interested in",
        Icon: PresentationIcon
    },
    {
        id: 6,
        label: "Blog post",
        tooltipText: "Get a full report about a market you’re interested in",
        Icon: BlogPostIcon
    },
    {
        id: 7,
        label: "Newsletter",
        tooltipText: "Get a full report about a market you’re interested in",
        Icon: NewsletterIcon
    },
    {
        id: 8,
        label: "Essay",
        tooltipText: "Get a full report about a market you’re interested in",
        Icon: EssayIcon
    },
    {
        id: 9,
        label: "Study guide",
        tooltipText: "Get a full report about a market you’re interested in",
        Icon: StudyGuideIcon
    },
]

export const dummyRecentProjects = [
    {
        template: {
            Icon: NewsletterIcon,
            label: "Newsletter"
        },
        project: {
            id: 1,
            name: "Learn a project: Generative AI"
        }
    },
    {
        template: {
            Icon: ChatIcon,
            label: "Chat"
        },
        project: {
            id: 2,
            name: "Lio Messi"
        }
    },
    {
        template: {
            Icon: PencilIcon,
            label: "User generated"
        },
        project: {
            id: 3,
            name: "Machines that respond to stimulation consistent with traditional respon..."
        }
    },
    {
        template: {
            Icon: EssayIcon,
            label: "Essay"
        },
        project: {
            id: 4,
            name: "What are students so lazy in 2025?"
        }
    },
]