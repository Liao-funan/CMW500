# READWCDMaSIGNiHACKTRACeSUBFrameCARRierc

Module: WCDMA Signaling
Source: 43e2a8ba32aa4a10.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA ACK Measurement
 > 
Measurement Results
 > 
READ:WCDMa:SIGN<i>:HACK:TRACe:SUBFrame:CARRier<c>?
READ:WCDMa:SIGN<i>:HACK:TRACe:SUBFrame:CARRier<c>? 
Returns the trace results per carrier with details on coding and modulation in subframes.
The number of results depends on the configured number of subframes N to be measured per measurement cycle, see 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
HACK:
​
MSFRames
. The results are returned as groups per measured subframe:
<Reliability>, {<Block>, <Code>, <Modulation>, <Redundancy>}
1
, {...}
2
,..., {...}
N
Suffix: 
<c>
1..*
Downlink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Block>
Detected transport block size index
Range: 
0 to 7
<Code>
Number of detected codes
Range: 
1 to 15
<Modulation>
QPSK |
 
 Q16 |
 
 Q64
QPSK, 16-QAM, 64-QAM
<Redundancy>
Detected H-ARQ redundancy version
Range: 
0 to 3
Example: 
See 
"Performing an HSDPA ACK Measurement"
Usage: 
Query only
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Results"
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top