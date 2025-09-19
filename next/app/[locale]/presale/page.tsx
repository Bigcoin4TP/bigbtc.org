import { AmbientColor } from '@/components/decorations/ambient-color';
import { Presale } from '@/components/presale';
export default function PresalePage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <Presale />
    </div>
  );
}
