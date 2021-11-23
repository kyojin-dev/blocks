import { BlockComponent } from '../BlockComponent/BlockComponent.js';

export class ActivityCaption extends BlockComponent {
  init$ = {
    '*modalCaption': undefined,
  };
}

ActivityCaption.template = /* html */ `
<div
  .caption
  set="textContent: *modalCaption">
</div>
`;
