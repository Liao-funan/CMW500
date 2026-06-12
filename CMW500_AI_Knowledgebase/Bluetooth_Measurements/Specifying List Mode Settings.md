# Specifying List Mode Settings

Module: Bluetooth Measurements
Source: dca414ccc6974023.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Using Bluetooth List Mode
 > 
Specifying List Mode Settings
Specifying List Mode Settings
// *****************************************************************************
// Define 2 segments with a length of 5 BR bursts each, different expected 
// nominal power, pattern, and trigger and identical remaining settings.
//
// Alternatively use individual ...:SET:... commands.
// *****************************************************************************
CONF:BLUetooth:MEAS:MEV:LIST:COUNt 2
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET BR,DH1,P11,27,1,5,ON,7,2402E+6,NARR,OFF
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET BR,DH1,P44,27,1,5,ON,0,2402E+6,NARR,ON
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:BTYPe BR
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:BTYPe BR
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:PTYPe DH1
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:PTYPe DH1
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:PATTern P11
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:PATTern P44
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:PLENgth 27
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:PLENgth 27
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:OSLots 1
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:OSLots 1
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:SLENgth 5
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:SLENgth 5
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:MOEXception ON
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:MOEXception ON
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:ENPower 7
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:ENPower 0
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:FREQuency 2402E+6
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:FREQuency 2402E+6
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:FILTer NARR
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:FILTer NARR
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:RTRigger OFF
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:RTRigger ON
// *****************************************************************************
// Alternatively define 2 segments for LE coded
// PHY with the length of 5 bursts each, different expected
// nominal power, pattern, and trigger and identical remaining settings.
//
// Alternatively use individual ...:SET:... commands for burst type
// physical layer and coding scheme.
// *****************************************************************************
CONFigure:BLUetooth:MEAS:MEValuation:LIST:SEGMent1:SETup:EXTended LE,
    LELR,S8,RFPHytest,ALL1,1021,1,5,ON,7,2402E+6,NARR,OFF
CONFigure:BLUetooth:MEAS:MEValuation:LIST:SEGMent2:SETup:EXTended LE,
 LELR,S8,RFPHytest,P11,1021,1,5,ON,0,2402E+6,NARR,ON
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:BTYPe LE
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:BTYPe LE
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:PHY LELR
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:PHY LELR
CONF:BLUetooth:MEAS:MEV:LIST:SEGM1:SET:CSCHeme S8
CONF:BLUetooth:MEAS:MEV:LIST:SEGM2:SET:CSCHeme S8
// *****************************************************************************
// Enable modulation and power scalar results and spectrum 20 dB bandwidth
// results for segment 1 and spectrum ACP results for segment 2.
//
// Alternatively use individual ...:RESults:... commands.
// *****************************************************************************
CONF:BLUetooth:MEAS:MEV:LIST:SEGMent1:RESults ON,ON,ON,OFF,OFF
CONF:BLUetooth:MEAS:MEV:LIST:SEGMent2:RESults OFF,OFF,OFF,ON,OFF
CONF:BLUetooth:MEAS:MEV:LIST:SEGMent1:RESults:MSCalar ON
CONF:BLUetooth:MEAS:MEV:LIST:SEGMent1:RESults:PSCalar ON
CONF:BLUetooth:MEAS:MEV:LIST:SEGMent1:RESults:SOBW ON
CONF:BLUetooth:MEAS:MEV:LIST:SEGMent2:RESults:SACP ON
// *****************************************************************************
// Set statistic count for the particular measurement type.
//
// Alternatively use individual ...:SCOunt:... commands.
// *****************************************************************************
CONFigure:BLUetooth:MEAS:MEV:LIST:SEGMent1:SCOunt 4,5,3,1,1 
CONFigure:BLUetooth:MEAS:MEV:LIST:SEGMent2:SCOunt 1,1,1,5,1
CONFigure:BLUetooth:MEAS:MEV:LIST:SEGMent1:SCOunt:MSCalar 4
CONFigure:BLUetooth:MEAS:MEV:LIST:SEGMent1:SCOunt:PSCalar 5
CONFigure:BLUetooth:MEAS:MEV:LIST:SEGMent1:SCOunt:SOBW 3
CONFigure:BLUetooth:MEAS:MEV:LIST:SEGMent2:SCOunt:SACP 5
// *****************************************************************************
// Only for measurements with R&S CMWS:
// Configure the RF input connector per segment.
// *****************************************************************************
CONFigure:BLUetooth:MEAS:MEValuation:LIST:CMWS:CMODe LIST
CONFigure:BLUetooth:MEAS:MEValuation:LIST:SEGMent1:CMWS:CONNector R11
CONFigure:BLUetooth:MEAS:MEValuation:LIST:SEGMent2:CMWS:CONNector R12
// *****************************************************************************
// Enable the list mode.
// *****************************************************************************
CONFigure:BLUetooth:MEAS:MEValuation:LIST ON
Top