import React, { useState, useRef } from 'react';
import TextInput from '../FormComponents/TextInput';
import SingleDropdown from '../FormComponents/SingleDropdown';
import { IoMicOutline } from "react-icons/io5";
import { FiUpload } from 'react-icons/fi';


const ChatWidgetConfigurator = () => {
  const [config, setConfig] = useState({
    configName: 'config-1',
    botName: 'Greebo',
    fontFamily: 'Space Grotesk, sans-serif',
    headerColor: '#E63A1E',
    headerFontColor: '#FFFFFF',
    backgroundColor: '#E8E1DB',
    chatFontColor: '#323130',
    avatarImage: '/api/placeholder/40/40',
    launcherImage: '/api/placeholder/40/40'
  });

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTextInputChange = (name, value) => {
    setConfig(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setConfig(prev => ({
          ...prev,
          [type]: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfigLoad = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        try {
          const loadedConfig = JSON.parse(reader.result);
          setConfig(loadedConfig);
        } catch (error) {
          console.error('Error loading config:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  const downloadConfig = () => {
    const configJson = JSON.stringify(config, null, 2);
    const blob = new Blob([configJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${config.configName}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const fonts = [
    'Space Grotesk, sans-serif',
    'Arial, sans-serif',
    'Helvetica, sans-serif'
  ];
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Configuration Panel */}
      <div className="w-1/2 p-12">
        <button
          className="mb-6 bg-black text-white px-4 py-2 rounded-lg"
          onClick={() => fileInputRef.current?.click()}
        >
          Load Config
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          className="hidden"
          onChange={handleConfigLoad}
        />

        <div className="space-y-6">
          <TextInput
            title="Config Name"
            value={config.configName}
            setValue={(value) => handleTextInputChange('configName', value)}
            placeholder="Enter config name"
          />

          <TextInput
            title="Bot Name"
            value={config.botName}
            setValue={(value) => handleTextInputChange('botName', value)}
            placeholder="Enter bot name"
          />

          <SingleDropdown
            title="Font Family"
            list={fonts}
            value={config.fontFamily}
            setValue={(value) => handleTextInputChange('fontFamily', value)}
            placeholder="Select a font family"
          />

          <div>
            <div className="flex items-end">
              <TextInput
                title="Header Color"
                value={config.headerColor}
                setValue={(value) => handleInputChange('headerColor', value)}
                placeholder="Select Header Color"
              />
              <input
                type="color"
                value={config.headerColor}
                onChange={(e) => handleInputChange({
                  target: { name: 'headerColor', value: e.target.value }
                })}
                className="ml-2 h-10 w-10"
              />
            </div>
          </div>

          <div>
            <div className="flex items-end">
              <TextInput
                title="Header Font Color"
                value={config.headerFontColor}
                setValue={(value) => handleInputChange('headerFontColor', value)}
                placeholder="Select Header Font Color"
              />
              <input
                type="color"
                value={config.headerFontColor}
                onChange={(e) => handleInputChange({
                  target: { name: 'headerFontColor', value: e.target.value }
                })}
                className="ml-2 h-10 w-10"
              />
            </div>
          </div>

          <div>
            <div className="flex items-end">
              <TextInput
                title="Background Color"
                value={config.backgroundColor}
                setValue={(value) => handleInputChange('backgroundColor', value)}
                placeholder="Select Background Color"
              />
              <input
                type="color"
                value={config.backgroundColor}
                onChange={(e) => handleInputChange({
                  target: { name: 'backgroundColor', value: e.target.value }
                })}
                className="ml-2 h-10 w-10"
              />
            </div>
          </div>

          <div>
            <div className="flex items-end">
              <TextInput
                title="Chat Font Color"
                value={config.chatFontColor}
                setValue={(value) => handleInputChange('chatFontColor', value)}
                placeholder="Select Chat Font Color"
              />
              <input
                type="color"
                value={config.chatFontColor}
                onChange={(e) => handleInputChange({
                  target: { name: 'chatFontColor', value: e.target.value }
                })}
                className="ml-2 h-10 w-10"
              />
            </div>
          </div>

          <div>
            <label className="block text-base font-medium mb-2">Avatar Image</label>
            <div className="flex items-center space-x-4 bg-white border border-gray-300 hover:outline-none hover:border-2 hover:border-black font-normal text-sm px-3 py-2.5 rounded-[7px]">
              <img src={config.avatarImage} alt="Avatar" className="w-10 h-10 rounded" />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'avatarImage')}
                className="flex-1"
              />
            <FiUpload className='pr-4 size-8'/>
            </div>
          </div>

          <div>
            <label className="block text-base font-medium mb-2">Launcher Image</label>
            <div className="flex items-center space-x-4 bg-white border border-gray-300 hover:outline-none hover:border-2 hover:border-black font-normal text-sm px-3 py-2.5 rounded-[7px]">
              <img src={config.launcherImage} alt="Launcher" className="w-10 h-10 rounded" />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'launcherImage')}
                className="flex-1"
              />
              <FiUpload className='pr-4 size-8'/>
            </div>
          </div>
        </div>
      </div>

      {/* Live Preview */}
      <div className="w-1/2 p-12" style={{ backgroundColor: config.backgroundColor }}>
        <div className="mb-4 flex justify-center gap-2">
          <span className="text-green-500 ">● </span>Live Preview
        </div>

        <div className="relative h-full">
          {/* Chat Widget Preview */}
          <div
            className="w-80 rounded-lg shadow-2xl absolute right-[25%] top-[10%] border-gray-400"
            style={{ fontFamily: config.fontFamily }}
          >
            <div
              className="p-4 rounded-t-lg flex items-center justify-between"
              style={{ backgroundColor: config.headerColor }}
            >
              <div className="flex items-center space-x-2">
                <span style={{ color: config.headerFontColor }}>{config.botName}</span>
              </div>
              <button className="text-white">✕</button>
            </div>

            <div style={{ backgroundColor: config.backgroundColor }} className="">
              <div className="flex items-start space-x-2 px-4 pt-4 pb-40">
                <img src={config.avatarImage} alt="Avatar" className="w-6 h-6 rounded mt-1" />
                <p style={{ color: config.chatFontColor }} className="flex-1">
                  Hi! I'm {config.botName}, your friendly concierge monster, here to answer questions, 
                  show you around, and automatically perform tasks on the site for you. How can I help?
                </p>
              </div>
              
              <div className="mt-4 bg-white p-3 flex items-center rounded-b-lg">
                <input
                  type="text"
                  placeholder="Need help? Just type or say it"
                  className="flex-1 outline-none"
                  readOnly
                />
                <IoMicOutline className="mr-3 size-5"/>
              </div>
            </div>
          {/* Launcher Preview */}
            <div className="absolute bottom-[-15%] right-0">
              <img src={config.launcherImage} alt="Launcher" className="w-12 h-12" />
            </div>
          </div>


          {/* Download Config Button */}
          <div className="absolute bottom-10 right-[38%] justify-center">
            <button
              onClick={downloadConfig}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Download Config
            </button>
            <div className="mt-2 text-sm text-gray-500">{config.configName}.json</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidgetConfigurator;