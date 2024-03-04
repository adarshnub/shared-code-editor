import EditorPage from "@/components/pages/EditorPage";
import CodeMirrorEditor from "@/components/shared/CodeMirrorEditor";

export default function Page({ params }: { params: { roomId: string } }) {
  return (
    <div>
        My Post: {params.roomId}
       <CodeMirrorEditor />
    </div>
);
}
