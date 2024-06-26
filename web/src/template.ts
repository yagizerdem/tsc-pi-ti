const gate = `
<div class="gate">
<h1>pişti</h1>
<hr/>
<button id="playbtn">play</button>
</div>`;

const gateWithSpinner = `
<div class="gate">
    <div>waiting for opponent</div>
<span class="loader"></span>
</div>
`;

const table = `
<div class="table">
<div class="container">
<div class="c-main"></div>
<div class="row">
<div class="c c-1"></div>
<div class="c c-2"></div>
<div class="c c-3"></div>
<div class="c c-4"></div>
<div class="c c-5"></div>
</div>
</div>
<div class="screen">
<div class="chatscreen"></div>
<input type="text" placeholder="you can chat"/>
<button>send chat</button>
<button>leave</button>
</div>
</div>`;
export { gate, gateWithSpinner, table };
