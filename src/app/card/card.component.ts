import {   Component, OnInit } from '@angular/core';
import { QrcodeComponent , NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  {

  copyStatus: string = ''; // To store the copy status message

  copyToClipboard(): void {
    const webAddress = 'www.tazkty.com/473847'; // Replace with your actual web address
    const dummyTextArea = document.createElement('textarea');
    dummyTextArea.value = webAddress;
    document.body.appendChild(dummyTextArea);
    dummyTextArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        this.copyStatus = 'Copied to clipboard!';
      } else {
        this.copyStatus = 'Copy failed.';
      }
    } catch (err) {
      this.copyStatus = 'Copy failed. Please use Ctrl+C (Cmd+C on Mac) to copy.';
    } finally {
      document.body.removeChild(dummyTextArea);
      setTimeout(() => {
        this.copyStatus = ''; 
      }, 2000);
    }
  }





  // copyToClipboard(): void {
  //   const webAddress = 'www.tazkty.com/473847';
  //   const dummyTextArea = document.createElement('textarea');
  //   dummyTextArea.value = webAddress;
  //   document.body.appendChild(dummyTextArea);
  //   dummyTextArea.select();
  //   document.execCommand('copy');
  //   document.body.removeChild(dummyTextArea);
  // }
}
