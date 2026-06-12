# Specifying Modulation Limits (OFDM)

Module: WLAN Measurements
Source: 9ef5bc64e25749ec.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
 > 
Specifying Modulation Limits (OFDM)
Specifying Modulation Limits (OFDM)
// *****************************************************************************
// Define modulation limits for OFDM signals, standards 802.11a, g.
// ***************************************************************************** 
CONF:WLAN:MEAS:MEV:LIMit:MODulation:LOFDm:EVM -5,-8,-10,-13,OFF,OFF,-23,-27
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:LOFDm:EVMPilot -10
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:LOFDm:IQOFfset -16
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:LOFDm:CFERror 45000
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:LOFDm:SCERror 21
// *****************************************************************************
// Define modulation limits for standard 802.11n.
// ***************************************************************************** 
CONF:WLAN:MEAS:MEV:LIMit:MODulation:HTOFdm:EVM -5,-8,-10,-13,OFF,OFF,-23,-27
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HTOFdm:EVMPilot -10
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HTOFdm:IQOFfset:BW40 -16
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HTOFdm:CFERror 45000
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HTOFdm:SCERror 21
// *****************************************************************************
// Define modulation limits for standard 802.11p.
// *****************************************************************************
CONF:WLAN:MEAS:MEV:LIMit:MODulation:POFDm:EVM -6,-8,-10,-13,-16,-19,-22,-25
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:POFDm:EVMPilot -7
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:POFDm:IQOFfset -16
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:POFDm:CFERror 61000
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:POFDm:SCERror 24
// *****************************************************************************
// Define modulation limits for standard 802.11ac.
// ***************************************************************************** 
CONF:WLAN:MEAS:MEV:LIM:MOD:VHT:EVM -5,-8,-13,-16,-19,-22,-25,-27,-30,-32,-35,-35
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:VHTofdm:EVMPilot -10
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:VHTofdm:IQOFfset:BW40 -20
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:VHTofdm:IQOFfset:BW8080 -25,-20
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:VHTofdm:CFERror 45000
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:VHTofdm:SCERror 21
// *****************************************************************************
// Define modulation limits for standard 802.11ax.
// ***************************************************************************** 
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HEOFdm:EVMall:TBCoderate CR12,
 CR34,CR34,CR56,CR56,CR34
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HEOFdm:EVMall:TBHigh -13,-13,
 -13,-13,-13,-13,-13,-16,-19,-22,-25,-27,-30,-32,-35,-35
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HEOFdm:EVMall:TBLow -27,-27,
 -27,-27,-27,-27,-27,-27,-27,-27,-27,-27,-30,-32,-35,-35
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HEOFdm:EVMPilo:TBHight -13
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HEOFdm:EVMPilot:TBLow -27
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HEOFdm:IQOFfset:BW20 -17.48
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HEOFdm:IQOFfset:BW40 -20.57
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HEOFdm:IQOFfset:BW80 -23.84
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HEOFdm:IQOFfset:BW160 -32
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:HEOFdm:IQOFfset:BW8080 -26.85,-20
CONFigure:WLAN:MEAS:MEValuation:LIMit:UTEPower HIGH
CONFigure:WLAN:MEAS:MEValuation:LIMit:UTERror ON
Top