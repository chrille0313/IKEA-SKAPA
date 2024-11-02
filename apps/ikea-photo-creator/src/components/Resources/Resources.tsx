export default function Resources() {
  const size = { width: '960px', height: '540px' }; 

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '150vh',
        width: '100%',
        gap: '2rem',
        marginTop: '-5%',
        marginBottom: '1%',
      }}
    >
      <video
        controls
        style={{
          ...size, 
          borderRadius: '8px',
        }}
      >
        <source src="/static/videos/Final_Pitch_slides_19.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTpJ6KXw40Cb8MChXVFDdyJddlAMNZdcGt_nq6tfUoy5Bfq8Xv0UTZej604coJPCDjHXTxOcYc_onzC/embed?start=false&loop=false&delayms=5000"
        style={{
          ...size, 
          border: 'none',
        }}
      ></iframe>
    </div>
  );
}
