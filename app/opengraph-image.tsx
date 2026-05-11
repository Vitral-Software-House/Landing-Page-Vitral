import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Vitral — Software house brasileira';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#000000',
          color: '#F9F9F9',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 20 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: '#E85002',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: '#000' }} />
          </div>
          <div style={{ fontWeight: 500 }}>Vitral</div>
          <div style={{ color: '#646464', fontSize: 14, letterSpacing: 2 }}>
            SOFTWARE/HOUSE — EST. 2026
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 96,
            lineHeight: 1,
            letterSpacing: -3,
            fontWeight: 400,
          }}
        >
          <div>Sistemas completos,</div>
          <div>construídos como <span style={{ color: '#E85002' }}>infraestrutura</span>.</div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 18,
            color: '#A7A7A7',
          }}
        >
          <div style={{ maxWidth: 640 }}>
            Software house brasileira. Do primeiro diagrama ao monitoramento em produção — agenda 2026 aberta.
          </div>
          <div style={{ color: '#E85002', fontWeight: 500 }}>projetos@vitral.software</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
