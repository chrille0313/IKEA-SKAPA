

export default function Resources() {
  return (
      <div
          style={{
              display: 'flex',
              flexDirection: 'column', // Stack iframe and video vertically
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              width: '100%',
              gap: '2rem' ,
              marginTop: '12rem',
              marginBottom: '12rem'
          }}
      >
          <video
            width="960"
            height="540"
            controls
            style={{
                borderRadius: '8px' 
            }}
          >
              <source src="/static/videos/Final_Pitch_slides_19.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

       <div style={{ position: 'relative', width: '960px', height: '0', paddingBottom: '56.25%' }}>
              <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vTpJ6KXw40Cb8MChXVFDdyJddlAMNZdcGt_nq6tfUoy5Bfq8Xv0UTZej604coJPCDjHXTxOcYc_onzC/embed?start=false&loop=false&delayms=5000"
                  style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                  }}
                  allowFullScreen
              ></iframe>
          </div>
      </div>
  );
}
