# CONFigureAUDioMEASiDIGitalSINGletoneLIMit

Module: Audio Measurements
Source: d7b8806dbca54445.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Measurements
 > 
Single Tone Measurement Settings
 > 
CONFigure:AUDio:MEAS<i>:DIGital:SINGletone:LIMit
CONFigure:AUDio:MEAS<i>:DIGital:SINGletone:LIMit 
<WeightRmsUpp>, <WeigtRmsEnab>, <BandRmsUpp>, <BandRmsEnab>, <THDPercUpp>, <THDPercEnab>, <THDPlusNUpp>, <THDPlusNEnab>, <SNRLow>, <SNREnab>
Configures the limits for digital single tone measurements.
Parameters:
<WeightRmsUpp>
Upper limit for weighted level RMS results
Range: 
0 FS  to  1 FS
*RST:
1 FS
Default unit: 
FS
<WeigtRmsEnab>
OFF |
 
 ON
Disables or enables the upper limit for weighted level RMS results
*RST:
OFF
<BandRmsUpp>
Upper limit for bandpass level RMS results
Range: 
0 FS  to  1 FS
*RST:
1 FS
Default unit: 
FS
<BandRmsEnab>
OFF |
 
 ON
Disables or enables the upper limit for bandpass level RMS results
*RST:
OFF
<THDPercUpp>
Upper limit for THD results
Range: 
0 %  to  100 %
*RST:
0.1 %
Default unit: 
%
<THDPercEnab>
OFF |
 
 ON
Disables or enables the upper limit for THD results
*RST:
OFF
<THDPlusNUpp>
Upper limit for THD + N results
Range: 
0 %  to  100 %
*RST:
0.5 %
Default unit: 
%
<THDPlusNEnab>
OFF |
 
 ON
Disables or enables the upper limit for THD + N results
*RST:
OFF
<SNRLow>
Lower limit for SNR results
Range: 
0 dB  to  100 dB
*RST:
54 dB
Default unit: 
dB
<SNREnab>
OFF |
 
 ON
Disables or enables the lower limit for SNR results
*RST:
OFF
Example: 
See 
"Single Tone Measurement"
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"Limits (Digital Measurement)"
Top