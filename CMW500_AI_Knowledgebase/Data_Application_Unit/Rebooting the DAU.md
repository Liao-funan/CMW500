# Rebooting the DAU

Module: Data Application Unit
Source: 2c4cb9ed48774b08.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Control
 > 
Rebooting the DAU
Rebooting the DAU
During normal operation, it is not required to reboot the DAU. But it can make sense for troubleshooting. In that case, proceed as follows.
// *****************************************************************************
// Switch the DAU off and wait until the procedure is complete.
// Then switch the DAU on again and wait until the reboot is complete.
// *****************************************************************************
SOURce:DATA:CONTrol:STATe OFF; *OPC?
SOURce:DATA:CONTrol:STATe ON; *OPC?
Top