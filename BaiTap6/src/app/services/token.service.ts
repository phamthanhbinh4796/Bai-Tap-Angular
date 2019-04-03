import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  getHeader() {
    const authToken= 'BQCqXk9awiR5yfi9k9euLAFyST5OnycxorsvIkk5H_bHtPQ9NOvURIAXpz2Jjf_JElqg4qX4hBH1CyUOa-l0RcRs83hyacN9KBF2nX-IwUmkibY5Jp1fLd6McW-jQc1NhlVPah95f8TeF98R1ECdYsSW5ujSTQcQozzHPLSVUWFAVW3ywDpXaR2BSuFgIv9QgMZfdDSS7dgx_CbaKCmJwl70nu68SVA';
    let headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return headers;
  }
}
