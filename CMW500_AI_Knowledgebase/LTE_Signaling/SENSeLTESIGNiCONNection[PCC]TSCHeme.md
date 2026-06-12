# SENSeLTESIGNiCONNection[PCC]TSCHeme

Module: LTE Signaling
Source: 80375d91ee8d4163.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General MIMO Settings
 > 
SENSe:LTE:SIGN<i>:CONNection[:PCC]:TSCHeme?
SENSe:LTE:SIGN<i>:CONNection[:PCC]:TSCHeme? 
SENSe:LTE:SIGN<i>:CONNection:SCC<c>:TSCHeme? 
Queries the transmission scheme.
Suffix: 
<c>
1..4
Return values: 
<Scheme>
SISO |
 
 SIMO |
 
 TXDiversity |
 
 OLSMultiplex |
 
 CLSMultiplex |
 
 CLSingle |
 
 SBF5 |
 
 SBF8 |
 
 DBF78 |
 
 FBF710
SISO
: single input single output
SIMO
: single input multiple outputs (receive diversity)
TXDiversity
: transmit diversity
OLSMultiplex
: open loop spatial multiplexing
CLSMultiplex
: closed loop spatial multiplexing
CLSingle
: closed loop spatial multiplexing, single layer
SBF5
: single-layer beamforming (port 5)
SBF8
: single-layer beamforming (port 8)
DBF78
: dual-layer beamforming (ports 7, 8)
FBF710
: four-layer beamforming (ports 7 to 10)
Example: 
See 
"Configuring  MIMO Settings"
Usage: 
Query only
Firmware/Software: 
V3.2.70, V3.7.10 added FBF710
Manual operation: 
See 
"Transmission Scheme"
Top