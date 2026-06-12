# CONFigureWCDMaSIGNiCELLHSDPaFIXedHSET

Module: WCDMA Signaling
Source: bd8879c1179749e8.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA Settings
 > 
Fixed Reference Channel Configuration
 > 
CONFigure:WCDMa:SIGN<i>:CELL:HSDPa:FIXed:HSET
CONFigure:WCDMa:SIGN<i>:CELL:HSDPa:FIXed:HSET 
<HSet>
Selects an H-Set for the fixed reference channel.
Parameters:
<HSet>
H1M1 |
 
 H1M2 |
 
 H2M1 |
 
 H2M2 |
 
 H3M1 |
 
 H3M2 |
 
 H4M1 |
 
 H5M1 |
 
 H6M1 |
 
 H6M2 |
 
 H8M3 |
 
 H8MT |
 
 H1MI |
 
 H8MI |
 
 H3A1 |
 
 H3A2 |
 
 H8A3 |
 
 H8AI |
 
 HAM1 |
 
 HAM2 |
 
 HAA1 |
 
 HAA2 |
 
 HCM1 |
 
 HCMT |
 
 H6A1 |
 
 H6A2 |
 
 H1AI |
 
 H1BI |
 
 H3B1 |
 
 H3B2 |
 
 H6B1 |
 
 H6B2 |
 
 H8B3 |
 
 H8BI |
 
 HAB1 |
 
 HAB2
Single carrier H-Sets:
H1M1
 to 
H6M1
, 
HAM1
: H-Set 1 to 6, 10 (QPSK)
H1M2
 to 
H3M2
, 
H6M2
, 
HAM2
: H-Set 1 to 3, 6, 10 (16-QAM)
H8M3
: H-Set 8 (64-QAM)
H1MI
, 
H8MI
: H-Set 1, 8 (maximum input)
H8MT
: H-Set 8 (maximum throughput)
Dual carrier H-Sets:
H1AI
: H-Set 1A (maximum input)
H3A1
, 
H6A1
, 
HAA1
, 
HCM1
: H-Set 3A, 6A, 10A, 12 (QPSK)
H3A2
, 
H6A2
, 
HAA2
: H-Set 3A, 6A, 10A (16-QAM)
H8A3
: H-Set 8A (64-QAM)
H8AI
: H-Set 8A (maximum input)
HCMT
: H-Set 12 (maximum throughput)
3C-HSDPA H-Sets:
H1BI
: H-Set 1B (maximum input)
H3B1
, 
H6B1
, 
HAB1
: H-Set 3B, 6B, 10B (QPSK)
H3B2
, 
H6B2
, 
HAB2
: H-Set 3B, 6B, 10B (16-QAM)
H8B3
: H-Set 8B (64-QAM)
H8BI
: H-Set 8B (maximum input)
*RST:
H5M1
Example: 
See 
"Configuring HSDPA Settings"
Firmware/Software: 
V2.1.20
V2.1.30: additional values H3A1 | H3A2 | H8A3 | H8AI | HAM1 | HAM2 | HAA1 | HAA2 | HCM1 | HCMT | H6A1 | H6A2
V3.0.10: additional value H1AI
V3.5.20: additional values H1BI | H3B1 | H3B2 | H6B1 | H6B2 | H8B3 | H8BI | HAB1 | HAB2
Options: 
R&S CMW-KS401
R&S CMW-KS403 for H-Set 8
R&S CMW-KS404 for dual carrier H-Sets
R&S CMW-KS406 for 3C-HSDPA H-Sets
Manual operation: 
See 
"H-Set"
Top