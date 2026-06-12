# FETChWCDMaSIGNiULLoggingDCHSpa

Module: WCDMA Signaling
Source: e81d4149462241e3.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
UL Logging Measurement
 > 
Measurement Results
 > 
FETCh:WCDMa:SIGN<i>:ULLogging:DCHSpa?
FETCh:WCDMa:SIGN<i>:ULLogging:DCHSpa? 
READ:WCDMa:SIGN<i>:ULLogging:DCHSpa? 
Return all results of the UL logging measurement on the E-DPCCH/DPCCH/HS-DPCCH. The results are returned as groups per measured subframe:
<Reliability>, {<SFN>, <Slot>, <ETFCI>, <RSN>, <HappyBit>, <DPCCH1>, <DPCCH2>, <DPCCH3>, <ACKNACK1>, <CQI1>, <ACKNACK2>, <CQI2>}
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
<3_Slot>
First slot number of the received UL HS-DPCCH/E-DPCCH/DPCCH subframe; see 
"UL Logging Measurement"
Range: 
0 | 3 | 6 | 9 | 12
<4_ETFCI1>
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
(Information related to dual carrier HSPA - cell one)
See also 
Table "2ms TTI E-DCH transport block size"
DTX:
 no answer received from the UE
0 to 127:
 indicates the transport block size on the E-DPDCH
<5_RSN1>
DTX |
 
 0 |
 
 1 |
 
 2 |
 
 3
(Information related to dual carrier HSPA - cell one)
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
<6_HappyBit1>
HAPPy |
 
 UNHappy |
 
 DTX
(Information related to dual carrier HSPA - cell one)
HAPPy:
 UE is satisfied with the granted data rate
UNHappy:
 UE is not transmitting at maximum power and cannot empty its transmit buffer with the current serving grant within a certain time period
DTX:
 no answer received from the UE
<7_DPCCH1C1>
OFF |
 
 ON
(Information related to dual carrier HSPA - cell one)
Queries the status of DPCCH read out from the first slot
<8_DPCCH2C1>
OFF |
 
 ON
(Information related to dual carrier HSPA - cell one)
Queries the status of DPCCH read out from the second slot
<9_DPCCH3C1>
OFF |
 
 ON
(Information related to dual carrier HSPA - cell one)
Queries the status of DPCCH read out from the third slot
<10_ETFCI2>
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
(Information related to dual carrier HSPA - cell two)
See also 
Table "2ms TTI E-DCH transport block size"
DTX:
 no answer received from the UE
0 to 127:
 indicates the transport block size on the E-DPDCH
<11_RSN2>
DTX |
 
 0 |
 
 1 |
 
 2 |
 
 3
(Information related to dual carrier HSPA - cell two)
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
<12_HappyBit2>
HAPPy |
 
 UNHappy |
 
 DTX
(Information related to dual carrier HSPA - cell two)
HAPPy:
 UE is satisfied with the granted data rate
UNHappy:
 UE is not transmitting at maximum power and cannot empty its transmit buffer with the current serving grant within a certain time period
DTX:
 no answer received from the UE
<13_DPCCH1C2>
OFF |
 
 ON
(Information related to dual carrier HSPA - cell two)
Queries the status of DPCCH read out from the first slot
<14_DPCCH2C2>
OFF |
 
 ON
(Information related to dual carrier HSPA - cell two)
Queries the status of DPCCH read out from the second slot
<15_DPCCH3C2>
OFF |
 
 ON
(Information related to dual carrier HSPA - cell two)
Queries the status of DPCCH read out from the third slot
<16_ACKNACK1>
DTX |
 
 ACK |
 
 NACK
HARQ ACK: UE response
(Information related to dual carrier HSPA - cell one)
DTX:
 no answer received from the UE
ACK:
 successful CRC check of a received transmission packet
NACK:
 failed CRC check of a received transmission packet
<17_CQI1>
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
(Information related to dual carrier HSPA - cell one)
DTX:
 no answer received from the UE
0 to 30:
 reported channel quality indicator
<18_ACKNACK2>
DTX |
 
 ACK |
 
 NACK
HARQ ACK: UE response
(Information related to dual carrier HSPA - cell two)
ACK:
 successful CRC check of a received transmission packet
NACK:
 failed CRC check of a received transmission packet
DTX:
 no answer received from the UE
<19_CQI2>
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
(Information related to dual carrier HSPA - cell two)
DTX:
 no answer received from the UE
0 to 30:
 reported channel quality indicator
Usage: 
Query only
Firmware/Software: 
V3.2.60
Options: 
R&S CMW-KS401
Top