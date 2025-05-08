import { FC } from "react";
import ReactImageUploading from "react-images-uploading";
import uploadIcon from "../../assets/imgs/icon_upload.png";
import confirmedIcon from "../../assets/imgs/icon_confirm.png";
import {largeSpinner} from '../../assets/spinner'

interface CaixaDeUploadProps {
  imagem: any;
  setImagem: (imagem: any) => void;
  serverResponseStatus?: string;
}

export const CaixaDeUpload: FC<CaixaDeUploadProps> = (props) => {
  const { imagem, setImagem, serverResponseStatus } = props;
  const onChange = (imageList: any, addUpdateIndex: any) => {
    console.log(imageList, addUpdateIndex);
    setImagem(imageList);
  };

  return (
    <div className="2xl:w-[650px] 2xl:h-[475px] xl:h-[300px] xl:w-[400px] w-[300px] h-[200px] rounded-md">
      {serverResponseStatus === "" ? (
        <ReactImageUploading
          value={imagem}
          onChange={onChange}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            isDragging,
            dragProps,
            // errors
          }) => (
            <div
              className="
                  upload__image-wrapper
                  w-fit h-fit
                  "
            >
              <button
                className="
                      bg-light-blue 
                      2xl:w-[650px] 2xl:h-[475px] xl:h-[300px] xl:w-[400px] w-[300px] h-[200px] rounded-md
                      flex justify-center items-center hover:cursor-pointer border-dashed border-gray-500 border-2
                      "
                onClick={onImageUpload}
                {...dragProps}
              >
                {imagem.length < 1 ? (
                  <div className="flex flex-col items-center gap-[18px] justify-center">
                    <img src={uploadIcon} alt="upload_icon" className="w-12" />
                    <div>
                      <h2 className="text-sm xl:text-lg font-bold text-blue">
                        Importe seu arquivo
                      </h2>
                      <h3 className="text-gray-500 text-sm font-normal"></h3>
                    </div>
                  </div>
                ) : (
                  <div
                    className="flex flex-col items-center justify-center gap-3
                       xl:w-[600px] xl:h-[400px]
                       "
                  >
                    <img
                      src={imagem[0]["data_url"]}
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                    {imageList[0].file?.name}
                  </div>
                )}
              </button>
              &nbsp;
            </div>
          )}
        </ReactImageUploading>
      ) : serverResponseStatus === "pending" ? (
        <div
        className="
        bg-light-blue  
          2xl:w-[650px] 2xl:h-[475px] xl:h-[300px] xl:w-[400px] w-[300px] h-[200px] rounded-md
          flex justify-center items-center border-dashed border-gray-500 border-2
          "
      >
        <div className="flex flex-col items-center justify-center gap-[18px]">
          <div style={{
            backgroundImage: largeSpinner
          }} className="xl:w-20 xl:h-20 w-16 h-16 bg-no-repeat bg-center bg-contain pb-10"> </div>
          <h2 className="text-sm xl:text-lg font-bold text-blue">Enviando arquivo...</h2>
        </div>
      </div>
      ) : (
        <div
        className="
        bg-light-green 
          2xl:w-[650px] 2xl:h-[475px] xl:h-[300px] xl:w-[400px] w-[300px] h-[200px] rounded-md
          flex justify-center items-center border-dashed border-gray-500 border-2
          "
      >
        <div className="flex flex-col items-center gap-[22px] justify-center">
          <img src={confirmedIcon} alt="upload_icon" className="w-[35%]" />
          <h2 className="text-md xl:text-lg font-bold text-green">Arquivo enviado</h2>
        </div>
      </div>
      )}
    </div>
  );
};
