# Specifying Spectrum Flatness Limits (OFDM)

Module: WLAN Measurements
Source: 85aa3e5d24c94854.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
 > 
Specifying Spectrum Flatness Limits (OFDM)
Specifying Spectrum Flatness Limits (OFDM)
// *****************************************************************************
// Define spectrum flatness limits for OFDM signals, standards 802.11a, g.
// ***************************************************************************** 
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:LOFDm:ENABle ON
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:LOFDm:UPPer 3
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:LOFDm:LOWer -3,-4
// *****************************************************************************
// Define spectrum flatness limits for standard 802.11n, 40 MHz.
// ***************************************************************************** 
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:HTOFdm:BW40:ENABle ON
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:HTOFdm:BW40:UPPer 3
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:HTOFdm:BW40:LOWer -3,-4
// *****************************************************************************
// Define spectrum flatness limits for standard 802.11p, 20 MHz.
// ***************************************************************************** 
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:POFDm:BW20:ENABle ON
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:POFDm:BW20:UPPer 3
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:POFDm:BW20:LOWer -4,-7
// *****************************************************************************
// Define spectrum flatness limits for standard 802.11ac, 40 MHz.
// ***************************************************************************** 
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:VHTofdm:BW40:ENABle ON
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:VHTofdm:BW40:UPPer 3
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:VHTofdm:BW40:LOWer -4,-7
// *****************************************************************************
// Define spectrum flatness limits for standard 802.11ax, 80 MHz.
// ***************************************************************************** 
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:HEOfdm:BW80:ENABle ON
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:HEOfdm:BW80:UPPer 3
CONFigure:WLAN:MEAS:MEValuation:LIMit:SFLatness:HEOfdm:BW80:LOWer -4,-7
Top