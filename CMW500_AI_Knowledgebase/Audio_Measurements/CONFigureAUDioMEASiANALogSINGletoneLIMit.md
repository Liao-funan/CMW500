# CONFigureAUDioMEASiANALogSINGletoneLIMit

Module: Audio Measurements
Source: 7ccb633e4f234866.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Measurements
 > 
Single Tone Measurement Settings
 > 
CONFigure:AUDio:MEAS<i>:ANALog:SINGletone:LIMit
CONFigure:AUDio:MEAS<i>:ANALog:SINGletone:LIMit 
<WeightRmsUpp>, <WeightRmsEnab>, <BandRmsUpp>, <BandRmsEnab>, <THDPercUpp>, <THDPercEnab>, <THDPlusNUpp>, <THDPlusNEnab>, <SNRLow>, <SNREnab>, <WeightPeakUpp>, <WeightPeakEnab>, <BandPeakUpp>, <BandPeakEnab>
Configures the limits for analog single tone measurements.
Parameters:
<WeightRmsUpp>
Upper limit for weighted level RMS results
Range: 
0 V  to  5 V
*RST:
5 V
Default unit: 
V
<WeightRmsEnab>
OFF |
 
 ON
Disables or enables the upper limit for weighted level RMS results
*RST:
OFF
<BandRmsUpp>
Upper limit for bandpass level RMS results
Range: 
0 V  to  5 V
*RST:
5 V
Default unit: 
V
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
<WeightPeakUpp>
Upper limit for weighted level peak results
Range: 
0 V  to  7.5 V
*RST:
7.5 V
Default unit: 
V
<WeightPeakEnab>
OFF |
 
 ON
Disables or enables the upper limit for weighted level peak results
*RST:
OFF
<BandPeakUpp>
Upper limit for bandpass level peak results
Range: 
0 V  to  7.5 V
*RST:
7.5 V
Default unit: 
V
<BandPeakEnab>
OFF |
 
 ON
Disables or enables the upper limit for bandpass level peak results
*RST:
OFF
Example: 
See 
"Single Tone Measurement"
Firmware/Software: 
V3.2.10, V3.7.10 added peak limits
Manual operation: 
See 
"Limits (Analog Measurement)"
Top