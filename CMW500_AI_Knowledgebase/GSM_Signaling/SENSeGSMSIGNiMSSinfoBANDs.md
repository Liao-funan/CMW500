# SENSeGSMSIGNiMSSinfoBANDs

Module: GSM Signaling
Source: 526af81ad02946ef.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
MS Capabilities
 > 
SENSe:GSM:SIGN<i>:MSSinfo:BANDs?
SENSe:GSM:SIGN<i>:MSSinfo:BANDs? 
Returns the supported GSM bands, support indicators for UMTS and CDMA2000 and the power class.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_G450>
OFF |
 
 ON
Support of GSM 450 band
<2_G450_GMSK>
Power class for GMSK modulation in the GSM 450 band
Range: 
1  to  5
<3_G450_8PSK>
U |
 
 E1 |
 
 E2 |
 
 E3
Power class for 8PSK modulation in the GSM 450 band
<4_G480>
OFF |
 
 ON
Support of GSM 480 band
<5_G480_GMSK>
Power class for GMSK modulation in the GSM 480 band
Range: 
1  to  5
<6_G480_8PSK>
U |
 
 E1 |
 
 E2 |
 
 E3
Power class for 8PSK modulation in the GSM 480 band
<7_G750>
OFF |
 
 ON
Support of GSM 750 band
<8_G750_GMSK>
Power class for GMSK modulation in the GSM 750 band
Range: 
1  to  5
<9_G750_8PSK>
U |
 
 E1 |
 
 E2 |
 
 E3
Power class for 8PSK modulation in the GSM 750 band
<10_GT810>
OFF |
 
 ON
Support of GSM T 810 band
<11_GT810_GMSK>
Power class for GMSK modulation in the GSM T 810 band
Range: 
1  to  5
<12_GT810_8PSK>
U |
 
 E1 |
 
 E2 |
 
 E3
Power class for 8PSK modulation in the GSM T 810 band
<13_G850>
OFF |
 
 ON
Support of GSM 850 band
<14_G850_GMSK>
Power class for GMSK modulation in the GSM 850 band
Range: 
1  to  5
<15_G850_8PSK>
U |
 
 E1 |
 
 E2 |
 
 E3
Power class for 8PSK modulation in the GSM 850 band
<16_G900P>
OFF |
 
 ON
Support of P-GSM 900 band
<17_G900P_GMSK>
Power class for GMSK modulation in the P-GSM 900 band
Range: 
1  to  5
<18_G900P_8PSK>
U |
 
 E1 |
 
 E2 |
 
 E3
Power class for 8PSK modulation in the P-GSM 900 band
<19_G900E>
OFF |
 
 ON
Support of E-GSM 900 band
<20_G900R>
OFF |
 
 ON
Support of R-GSM 900 band
<21_G900R_GMSK>
Power class for GMSK modulation in the R-GSM 900 band
Range: 
1  to  5
<22_G1800>
OFF |
 
 ON
Support of GSM 1800 band
<23_G1800_GMSK>
Power class for GMSK modulation in the GSM 1800 band
Range: 
1  to  5
<24_G1800_8PSK>
U |
 
 E1 |
 
 E2 |
 
 E3
Power class for 8PSK modulation in the GSM 1800 band
<25_G1900>
OFF |
 
 ON
Support of GSM 1900 band
<26_G1900_GMSK>
Power class for GMSK modulation in the GSM 1900 band
Range: 
1  to  5
<27_G1900_8PSK>
U |
 
 E1 |
 
 E2 |
 
 E3
Power class for 8PSK modulation in the GSM 1900 band
<28_U_FDD>
OFF |
 
 ON
Support of UMTS FDD
<29_U_TDD384>
OFF |
 
 ON
Support of UMTS TDD 3.84 Mcps
<30_U_TDD128>
OFF |
 
 ON
Support of UMTS TDD 1.28 Mcps
<31_CDMA2000>
OFF |
 
 ON
Support of CDMA2000
Example: 
See 
"Querying MS Capabilities"
Usage: 
Query only
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Bands/Power Class"
Top