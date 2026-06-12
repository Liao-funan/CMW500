# ROUTeWLANMEASiSCENario

Module: WLAN Measurements
Source: 3d7faaaf1a5846b6.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:WLAN:MEAS<i>:SCENario?
ROUTe:WLAN:MEAS<i>:SCENario? 
Returns the active scenario.
Return values: 
<Scenario>
SALone |
 
 CSPath |
 
 SMI4 |
 
 MIMO2x2 |
 
 MIMO4x4 |
 
 MIMO8x8
SALone
: Standalone (non-signaling)
CSPath
: Combined signal path (with WLAN signaling)
SMI4
: Switched MIMO 4xn (R&S
 
CMW500/2xx with BB Meas with two basic frontends)
MIMO2x2
: Switched MIMO 2x2 (R&S
 
CMW100)
MIMO4x4
: Switched MIMO 4x4 (R&S
 
CMW100)
MIMO8x8
: Switched MIMO 8x8 (R&S
 
CMW100)
Usage: 
Query only
Firmware/Software: 
V2.0.10, V2.1.30: added CSPath, V3.5.30: added SMI4, MIMO2x2, MIMO4x4, V3.5.121: added MIMO8x8
Manual operation: 
See 
"Scenario = StandAlone"
Top