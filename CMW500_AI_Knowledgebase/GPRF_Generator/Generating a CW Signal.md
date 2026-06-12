# Generating a CW Signal

Module: GPRF Generator
Source: 41ef843050964d4f.htm

## 原始指令文档说明
GPRF Generator
 > 
Programming
 > 
Generating a CW Signal
Generating a CW Signal
// *****************************************************************************
// Initial system-reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC? 
// *****************************************************************************
// Route output signal for single R&S CMW500/2xx
// *****************************************************************************
ROUTe:GPRF:GEN:SCENario:SALone RF1C, TX1 
// *****************************************************************************
// Route output signal for R&S CMW100:
// - Select the connector bench 
// - Activate the first four connectors / deactivate the last four
// - Deactivate the first connector
// *****************************************************************************
ROUTe:GPRF:GEN:SCENario:SALone R118, TX11
CONFigure:GPRF:GEN:CMWS:USAGe:TX:ALL R118, ON, ON, ON, ON, OFF, OFF, OFF, OFF
CONFigure:GPRF:GEN:CMWS:USAGe:TX R11, OFF 
// *****************************************************************************
// Route output signal for setup with R&S CMWS:
// - Select the connector bench
// - Activate the first four connectors / deactivate the last four
// - Deactivate the first connector
// *****************************************************************************
ROUTe:GPRF:GEN:SCENario:SALone R118, TX1
CONFigure:GPRF:GEN:CMWS:USAGe:TX:ALL R118, ON, ON, ON, ON, OFF, OFF, OFF, OFF
CONFigure:GPRF:GEN:CMWS:USAGe:TX R11, OFF
// ****************************************************************************
// Define external attenuation
// ****************************************************************************
SOURce:GPRF:GEN:RFSettings:EATTenuation 2
// *****************************************************************************
// Set frequency and level, query peak envelope power, activate CW mode
// *****************************************************************************
SOURce:GPRF:GEN:RFSettings:FREQuency 1.000000E+009
SOURce:GPRF:GEN:RFSettings:LEVel -70
SOURce:GPRF:GEN:RFSettings:PEPower?
SOURce:GPRF:GEN:BBMode CW
// *****************************************************************************
// Switch on generator. With command synchronization, the queried
// generator state is "ON".
// *****************************************************************************
SOURce:GPRF:GEN:STATe ON; *OPC?
SOURce:GPRF:GEN:STATe?
Top