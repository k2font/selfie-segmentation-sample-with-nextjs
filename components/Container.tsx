const Container = () => {
  return (
    <div className="container">
      <video id='videoTag' width="1080px" height="720px" autoPlay muted playsInline></video>
      <div className="canvas-container">
        <canvas id="output_canvas" width="1080px" height="720px"> </canvas>
      </div>
    </div>
  )
}

export {
  Container
};
