# FETChWCDMaSIGNiULLoggingCARRiercETFCi

Module: WCDMA Signaling
Source: 75c1a4d28a8f4d03.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
UL Logging Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:ULLogging:CARRier<c>:ETFCi?
FETCh:WCDMa:SIGN<i>:ULLogging:CARRier<c>:ETFCi? 
READ:WCDMa:SIGN<i>:ULLogging:CARRier<c>:ETFCi? 
Return results of the UL logging measurement on the E-DPCCH. The results are returned per measured subframe:
<Reliability>, <ETFCI>
subframe1
, <ETFCI>
subframe2
, ..., <ETFCI>
subframe n
The number of subframes n is configured via 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
ULLogging:
​
MSFRames
.
Suffix: 
<c>
1..*
Uplink carrier
Return values: 
<Reliability>
See 
"Reliability Indicator"
<ETFCI>
DTX |
 
 0 |
 
 1 |
 
 2 |
 
 3 |
 
 4 |
 
 5 |
 
 6 |
 
 7 |
 
 8 |
 
 9 |
 
 10 |
 
 11 |
 
 12 |
 
 13 |
 
 14 |
 
 15 |
 
 16 |
 
 17 |
 
 18 |
 
 19 |
 
 20 |
 
 21 |
 
 22 |
 
 23 |
 
 24 |
 
 25 |
 
 26 |
 
 27 |
 
 28 |
 
 29 |
 
 30 |
 
 31 |
 
 32 |
 
 33 |
 
 34 |
 
 35 |
 
 36 |
 
 37 |
 
 38 |
 
 39 |
 
 40 |
 
 41 |
 
 42 |
 
 43 |
 
 44 |
 
 45 |
 
 46 |
 
 47 |
 
 48 |
 
 49 |
 
 50 |
 
 51 |
 
 52 |
 
 53 |
 
 54 |
 
 55 |
 
 56 |
 
 57 |
 
 58 |
 
 59 |
 
 60 |
 
 61 |
 
 62 |
 
 63 |
 
 64 |
 
 65 |
 
 66 |
 
 67 |
 
 68 |
 
 69 |
 
 70 |
 
 71 |
 
 72 |
 
 73 |
 
 74 |
 
 75 |
 
 76 |
 
 77 |
 
 78 |
 
 79 |
 
 80 |
 
 81 |
 
 82 |
 
 83 |
 
 84 |
 
 85 |
 
 86 |
 
 87 |
 
 88 |
 
 89 |
 
 90 |
 
 91 |
 
 92 |
 
 93 |
 
 94 |
 
 95 |
 
 96 |
 
 97 |
 
 98 |
 
 99 |
 
 100 |
 
 101 |
 
 102 |
 
 103 |
 
 104 |
 
 105 |
 
 106 |
 
 107 |
 
 108 |
 
 109 |
 
 110 |
 
 111 |
 
 112 |
 
 113 |
 
 114 |
 
 115 |
 
 116 |
 
 117 |
 
 118 |
 
 119 |
 
 120 |
 
 121 |
 
 122 |
 
 123 |
 
 124 |
 
 125 |
 
 126 |
 
 127
See also 
Table "2ms TTI E-DCH transport block size"
DTX:
 no answer received from the UE
0 to 127:
 indicates the transport block size on the E-DPDCH
*RST:
n/a
Usage: 
Query only
Firmware/Software: 
V3.0.30
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KS401
Top