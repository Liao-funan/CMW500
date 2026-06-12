# CONFigureGPRFMEASiFFTSanalyzerPSEarch

Module: GPRF Measurements
Source: a7ae96a5f324487e.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
FFT Spectrum Analyzer Commands
 > 
Search Functions
 > 
CONFigure:GPRF:MEAS<i>:FFTSanalyzer:PSEarch
CONFigure:GPRF:MEAS<i>:FFTSanalyzer:PSEarch 
<FullSearch0>, <From0>, <To0>, ..., <FullSearch4>, <From4>, <To4>
Defines the peak search ranges. The search ranges are automatically adjusted if the frequency span f
s
 is reduced (see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
FFTSanalyzer:
​
FSPan
). Range settings beyond the number of active markers (see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
FFTSanalyzer:
​
PSEarch:
​
NOAMarkers
) are ignored.
Parameters:
<FullSearch0> ... <FullSearch4>
OFF |
 
 ON
OFF:
 Limit the search to the range [<From ...>, <To ...>].
ON:
 Search the full span.
*RST:
ON
<From0> ... <From4>
Range: –F
s
 / 2 to +F
s
 / 2
F
s
 is the frequency span.
*RST:
-5E+6 Hz
Default unit: 
Hz
<To0> ... <To4>
Range: –F
s
 / 2 to +F
s
 / 2
F
s
 is the frequency span.
*RST:
5E+6 Hz
Default unit: 
Hz
Example: 
See 
"Single-Shot and Continuous Measurements"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Marker - Peak Search Setup"
Top