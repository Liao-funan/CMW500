# FETChGSMSIGNiBERCSWitched

Module: GSM Signaling
Source: ff25170d54434c00.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BER CS Measurement
 > 
Measurement Results
 > 
FETCh:GSM:SIGN<i>:BER:CSWitched?
FETCh:GSM:SIGN<i>:BER:CSWitched? 
READ:GSM:SIGN<i>:BER:CSWitched? 
Returns the results of the BER CS measurement. As indicated in the parameter descriptions below, each measure mode provides valid results for a subset of the parameters only. For the other parameters NCAP is returned.
For details concerning measure modes and results, see 
"BER CS Measurement"
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Frames>
Number of already transmitted bursts, blocks or frames
Range: 
0  to  500E+3
<BER>
BER result (modes: burst-by-burst, mean BEP, signal quality)
Range: 
0 %  to  100 %
Default unit: 
%
<CRC_Errors>
Number of failed CRC checks (modes: BER, RBER/FER, RBER/UFR, BFI)
Range: 
0  to  500E+3
<ClassII>
BER result for class II bits (BER mode)
RBER result for class II bits (modes: RBER/FER, RBER/UFR)
Range: 
0 %  to  100 %
Default unit: 
%
<ClassIb>
BER result for class Ib bits (BER mode)
RBER result for class Ib bits (modes: RBER/FER, RBER/UFR)
Range: 
0 %  to  100 %
Default unit: 
%
<FER>
FER result (modes: RBER/FER, FER FACCH, FER SACCH, AMR inband FER)
UFR result (RBER/UFR mode)
Range: 
0 %  to  100 %
Default unit: 
%
<L2FramesRep>
Number of repeated L2 frames (FER FACCH mode)
Range: 
0  to  500E+3
<ErrorEvents>
Number of error events (FER SACCH mode)
Range: 
0  to  500E+3
<NumberSIDFrames>
Number of already transmitted silence insertion descriptor (SID) frames (BFI mode)
Range: 
0  to  500E+3
<SIDFrameErrRate>
SID frame error rate (BFI mode)
Range: 
0 %  to  100 %
Default unit: 
%
<FalseBFIRate>
False BFI rate (BFI mode)
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Measuring in Burst by Burst Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
V2.0.10: added 
<Class II>
, 
<Class Ib>
, 
<FER>
V2.1.25: added 
<L2 Frames Rep>
, 
<Error Events>
V3.2.70: added 
<NumberSIDFrames>
, 
<SIDFrameErrRate>
, 
<FalseBFIRate>
Manual operation: 
See 
"Results"
Top