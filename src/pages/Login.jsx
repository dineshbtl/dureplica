import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import styles from './Login.module.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className={styles.loginContainer}>
      {/* Left side with image */}
      <div className={styles.imageSection}>
        <div className={styles.logoTopLeft}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>du</div>
            <span className={styles.logoText}>Tech</span>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop" 
            alt="EV Charging" 
            className={styles.bgImage}
          />
        </div>
      </div>

      {/* Right side with form */}
      <div className={styles.formSection}>
        <div className={styles.formWrapper}>
          
          <div className={styles.logoCenter}>
            <div className={styles.logoLarge}>
              <div className={styles.logoIconLarge}>du</div>
              <span className={styles.logoTextLarge}>Tech</span>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleLogin}>
            
            <div className={styles.inputGroup}>
              <input 
                type="email" 
                id="email"
                className={styles.input} 
                defaultValue="yesh@brihaspathi.com"
                required
              />
              <label htmlFor="email" className={styles.label}>Email</label>
            </div>

            <div className={styles.inputGroup}>
              <input 
                type={showPassword ? "text" : "password"} 
                id="password"
                className={styles.input} 
                defaultValue="ddPa'93rNYr7%]]"
                required
              />
              <label htmlFor="password" className={styles.label}>Password</label>
              <button 
                type="button" 
                className={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            <div className={styles.formLinks}>
              <button type="button" className={styles.firstTimeLink}>First Time Login</button>
              <button type="button" className={styles.forgotLink}>Forgot Password ?</button>
            </div>

            <button type="submit" className={styles.loginBtn}>
              Login
            </button>
          </form>

          <div className={styles.poweredBy}>
            <span className={styles.poweredText}>Powered By</span>
            <div className={styles.poweredLogo}>
              <div className={styles.threeNethraIcon}>
                <div className={styles.cameraLens}></div>
              </div>
              <div className={styles.threeNethraText}>
                <span className={styles.threeNethraMain}>3Nethra</span>
                <span className={styles.threeNethraSub}>AI Surveillance</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
