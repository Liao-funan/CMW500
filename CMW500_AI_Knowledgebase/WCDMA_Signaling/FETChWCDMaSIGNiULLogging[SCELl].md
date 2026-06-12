# FETChWCDMaSIGNiULLogging[SCELl]

Module: WCDMA Signaling
Source: c2eade3cd18a4b20.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
UL Logging Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:ULLogging[:SCELl]?
FETCh:WCDMa:SIGN<i>:ULLogging[:SCELl]? 
READ:WCDMa:SIGN<i>:ULLogging[:SCELl]? 
Return all results of the UL logging measurement on the E-DPCCH/DPCCH/HS-DPCCH. The results are returned as groups per measured subframe:
<Reliability>, {<SFN>, <Slot>, <ETFCI>, <RSN>, <HappyBit>, <DPCCH1>, <DPCCH2>, <DPCCH3>, <ACKNACK>, <CQI>}
subframe 1
, {...}
subframe 2
, ..., {...}
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
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
See 
"Reliability Indicator"
<2_SFN>
System frame number corresponds to the subframe number for which the UL HS-DPCCH/E-DPCCH/DPCCH information is displayed (set to modulo 4095)
Range: 
0  to  4095
*RST:
0
<3_Slot>
First slot number of the received UL HS-DPCCH/E-DPCCH/DPCCH subframe; see 
"UL Logging Measurement"
Range: 
0 | 3 | 6 | 9 | 12
*RST:
n/a
<4_ETFCI>
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
<5_RSN>,...
Retransmission sequence number
DTX:
 no answer received from the UE
0:
 new transmission
1:
 first retransmission
2:
 second retransmission
3:
 higher than second retransmission
*RST:
n/a
<6_HappyBit>
HAPPy |
 
 UNHappy |
 
 DTX
HAPPy:
 UE is satisfied with the granted data rate
UNHappy:
 UE is not transmitting at maximum power and cannot empty its transmit buffer with the current serving grant within a certain time period
DTX:
 no answer received from the UE
*RST:
n/a
<7_DPCCH1>,...
OFF |
 
 ON
Queries the status of DPCCH read out from the first slot
*RST:
n/a
<8_DPCCH2>,...
OFF |
 
 ON
Queries the status of DPCCH read out from the second slot
*RST:
n/a
<9_DPCCH3>,...
OFF |
 
 ON
Queries the status of DPCCH read out from the third slot
*RST:
n/a
<10_ACKNACK>,...
DTX |
 
 ACK |
 
 NACK
HARQ ACK: UE response
DTX:
 no answer received from the UE
ACK:
 successful CRC check of a received transmission packet
NACK:
 failed CRC check of a received transmission packet
*RST:
n/a
<11_CQI>,...
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
 
 30
UE response; 30 means the best quality
DTX:
 no answer received from the UE
0 to 30:
 reported channel quality indicator, 30 means the best quality
*RST:
n/a
Usage: 
Query only
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS401
Top