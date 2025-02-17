import PropTypes from 'prop-types';

PreloaderFrame.propTypes = {
  refData: PropTypes.shape({
    textRef: PropTypes.object,
    lineWord: PropTypes.object,
    textListRef: PropTypes.object,
  }).isRequired,
  currentWord: PropTypes.string,
};

export function PreloaderFrame({ refData, currentWord }) {
  return (
    <div>
      <h1 ref={refData.textRef} className="text-5xl font-bold text-gray-800">
        <div style={{ display: 'inline-block' }}>NO</div>
        <span>
          <div
            ref={refData.lineWord}
            style={{
              display: 'inline-block',
              height: '0.1em',
              width: '1em',
              margin: '0.3em',
              marginBottom: '0.3em',
              backgroundColor: 'black',
              borderRadius: '5px',
              transformOrigin: 'left',
              transform: 'scaleX(0)',
            }}
          />
        </span>
        <div ref={refData.textListRef} style={{ display: 'inline-block', position: 'absolute' }}>
          {currentWord}
        </div>
      </h1>
    </div>
  );
}
