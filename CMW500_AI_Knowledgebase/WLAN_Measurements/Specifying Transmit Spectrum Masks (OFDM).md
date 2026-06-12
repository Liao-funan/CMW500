# Specifying Transmit Spectrum Masks (OFDM)

Module: WLAN Measurements
Source: 246394c40fc74d65.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
 > 
Specifying Transmit Spectrum Masks (OFDM)
Specifying Transmit Spectrum Masks (OFDM)
// *****************************************************************************
// Define spectrum mask for OFDM signals, standards 802.11a, g.
// *****************************************************************************
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:LOFDm:ENABle ON
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:LOFDm:Y:A -39
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:LOFDm:Y:B -39
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:LOFDm:Y:C -27
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:LOFDm:Y:D -19
// *****************************************************************************
// Define spectrum mask for standard 802.11n, 40 MHz, 5-GHz band.
// *****************************************************************************
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:HTOFdm:BW40:ENABle ON
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:HTOFdm:BW40:Band5:Y:A -46
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:HTOFdm:BW40:Band5:Y:B -46
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:HTOFdm:BW40:Band5:Y:C -30
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:HTOFdm:BW40:Band5:Y:D -20
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:HTOFdm:BW40:ABSLimit -70
// *****************************************************************************
// Define spectrum mask for standard 802.11p, 10 MHz.
// *****************************************************************************
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:ENABle ON
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:CA:Y:A -41
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:CA:Y:B -41
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:CA:Y:C -29
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:CA:Y:D -21
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:CA:Y:E -11
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:CB:Y:A -41
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:CB:Y:B -41
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:CB:Y:C -29
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:CB:Y:D -21
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:CB:Y:E -17
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:UDEFined:Y:A -51
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:UDEFined:Y:B -51
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:UDEFined:Y:C -41
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:UDEFined:Y:D -33
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:UDEFined:Y:E -27
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:ABSolute:Y:A -28
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:ABSolute:Y:B -28
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:ABSolute:Y:C -18
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:ABSolute:Y:D -10
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:ABSolute:Y:E -4
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:POFDm:BW10:ABSolute:Y:F 22
// *****************************************************************************
// Define spectrum mask for standard 802.11ac, 40 MHz.
// *****************************************************************************
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:VHTofdm:BW40:ENABle ON
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:VHTofdm:BW40:Y:A -44
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:VHTofdm:BW40:Y:B -44
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:VHTofdm:BW40:Y:C -27
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:VHTofdm:BW40:Y:D -19
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:VHTofdm:BW40:ABSLimit -65
// *****************************************************************************
// Define spectrum mask for standard 802.11ax, 80 MHz.
// *****************************************************************************
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:HEOfdm:BW80:ENABle ON
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:HEOfdm:BW80:Y:A -44
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:HEOfdm:BW80:Y:B -44
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:HEOfdm:BW80:Y:C -27
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:HEOfdm:BW80:Y:D -19
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:HEOfdm:BW80:ABSLimit -65
Top