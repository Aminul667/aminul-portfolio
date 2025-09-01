import { ExternalLink, Github, Globe } from "lucide-react";
import { Button } from "../ui/button";

interface ProjectLinksProps {
  liveUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
  liveText?: string;
  codeText?: string;
}

const ProjectLinks = ({
  liveUrl,
  frontendUrl,
  backendUrl,
  liveText,
  codeText,
}: ProjectLinksProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {liveUrl && (
        <Button
          asChild
          variant="default"
          size="sm"
          className="gap-1.5 bg-black text-white hover:bg-white hover:text-black"
        >
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Globe className="h-3.5 w-3.5" />
            {liveText ? liveText : "Live"}
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      )}

      {frontendUrl && (
        <Button
          asChild
          variant="outline"
          size="sm"
          className="gap-1.5 bg-transparent hover:bg-white"
        >
          <a href={frontendUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-3.5 w-3.5" />
            {codeText ? codeText : "Frontend"}
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      )}

      {backendUrl && (
        <Button
          asChild
          variant="outline"
          size="sm"
          className="gap-1.5 bg-transparent hover:bg-white"
        >
          <a href={backendUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-3.5 w-3.5" />
            Backend
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      )}
    </div>
  );
};

export default ProjectLinks;
