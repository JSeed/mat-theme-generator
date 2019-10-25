import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class FaviconService {
 

    private favicon: HTMLLinkElement
    private canvas: HTMLCanvasElement;
    private img: HTMLImageElement;
    private context: CanvasRenderingContext2D;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) {
        this.favicon = <HTMLLinkElement>this.document.getElementById('favicon');
        this.canvas = this.document.createElement('canvas');
        this.canvas.width = 32;
        this.canvas.height = 32;
        this.context = this.canvas.getContext('2d');

        this.img = this.document.createElement('img');
        this.img.src = this.favicon.href;
    }

    updateColor(color) {
        // Defer update if img hasnt loaded
        if (!this.img.complete) {
            return this.img.onload = () => this.updateColor(color);
        }
        
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);

        this.context.globalCompositeOperation = "source-atop";
        this.context.globalAlpha = 1.0;
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.globalCompositeOperation = "source-over";
        this.context.globalAlpha = 1.0;
        
        this.favicon.href= this.canvas.toDataURL("image/x-icon", 1);
    
       
    }

}